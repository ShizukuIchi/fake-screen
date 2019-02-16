import React, { useReducer, useEffect, useState } from 'react';
import sampleSize from 'lodash.samplesize';

import { Config } from './config';
import MineSweeperView from './MineSweeperView';

// state: {
//   difficulty: 'Beginner' || 'Intermediate' || 'Expert',
//   status: 'new' || 'started' || 'died' || 'won',
//   rows: Number,
//   columns: Number,
//   mines: Number,
//   ceils: Array {
//     state: 'cover' || 'flag' || 'unknown' || 'open',
//     minesAround: Number (negative for mine itself)
//   }
// }

function getInitState(difficulty = 'Beginner') {
  return {
    difficulty,
    status: 'new',
    ...genGameConfig({ ...Config[difficulty], empty: true }),
  };
}

function reducer(state, action = {}) {
  switch (action.type) {
    case 'CLEAR_MAP':
      const difficulty = action.payload || state.difficulty;
      return getInitState(difficulty);
    case 'START_GAME':
      const exclude = action.payload;
      return {
        ...state,
        ...genGameConfig({ ...Config[state.difficulty], exclude }),
        status: 'started',
      };
    case 'OPEN_CEIL': {
      const indexes = autoCeils(state, action.payload);
      const ceils = [...state.ceils];
      indexes.forEach(i => {
        const ceil = ceils[i];
        ceils[i] = { ...ceil, state: 'open' };
      });
      return {
        ...state,
        ceils,
      };
    }
    case 'CHANGE_CEIL_STATE': {
      const index = action.payload;
      const ceils = [...state.ceils];
      const ceil = state.ceils[index];
      let newState;
      switch (ceil.state) {
        case 'cover':
          newState = 'flag';
          break;
        case 'flag':
          newState = 'unknown';
          break;
        case 'unknown':
          newState = 'cover';
          break;
        default:
          throw new Error(`Unknown ceil state ${ceil.state}`);
      }
      ceils[index] = { ...ceil, state: newState };
      return {
        ...state,
        ceils,
      };
    }
    case 'GAME_OVER': {
      const ceils = state.ceils.map(ceil => {
        if (ceil.minesAround >= 0) return ceil;
        return {
          ...ceil,
          state: 'open',
        };
      });
      ceils[action.payload].state = 'die';
      return {
        ...state,
        status: 'died',
        ceils: ceils,
      };
    }
    case 'WON': {
      const ___ceils = state.ceils.map(ceil => {
        if (ceil.minesAround >= 0) {
          return {
            ...ceil,
            state: 'open',
          };
        } else {
          return {
            ...ceil,
            state: 'flag',
          };
        }
      });
      return {
        ...state,
        status: 'won',
        ceils: ___ceils,
      };
    }
    default:
      return state;
  }
}

function MineSweeper({ defaultDifficulty }) {
  const [state, dispatch] = useReducer(
    reducer,
    getInitState(defaultDifficulty),
  );
  const seconds = useTimer(state.status);
  function changeCeilState(index) {
    const ceil = state.ceils[index];
    if (ceil.state === 'open' || ['won', 'died'].includes(state.status)) return;
    dispatch({ type: 'CHANGE_CEIL_STATE', payload: index });
  }
  function openCeil(index) {
    switch (state.status) {
      case 'new':
        dispatch({ type: 'START_GAME', payload: index });
        dispatch({ type: 'OPEN_CEIL', payload: index });
        break;
      case 'started':
        const ceil = state.ceils[index];
        if (['flag', 'open'].includes(ceil.state)) {
          break;
        } else if (ceil.minesAround < 0) {
          dispatch({ type: 'GAME_OVER', payload: index });
        } else {
          dispatch({ type: 'OPEN_CEIL', payload: index });
        }
        break;
      default:
        console.log(state.status);
    }
  }
  useEffect(() => {
    if (state.status === 'started' && checkRemains() === 0) {
      dispatch({ type: 'WON' });
    }
  });
  function onReset(difficulty) {
    dispatch({ type: 'CLEAR_MAP', payload: difficulty });
  }
  function checkRemains() {
    const safeCeils = state.ceils
      .filter(ceil => ceil.state !== 'open')
      .filter(ceil => ceil.minesAround >= 0);
    return safeCeils.length;
  }
  return (
    <MineSweeperView
      {...state}
      changeCeilState={changeCeilState}
      openCeil={openCeil}
      onReset={onReset}
      seconds={seconds}
    />
  );
}

function genGameConfig(config) {
  const { rows, columns, mines, exclude, empty } = config;
  const emptyArray = [...Array(rows * columns).keys()];
  const ceils = emptyArray.map(_ => ({
    state: 'cover',
    minesAround: 0,
  }));
  if (!empty) {
    sampleSize(emptyArray.filter(i => i !== exclude), mines).forEach(chosen => {
      const chosenCeil = ceils[chosen];
      chosenCeil.minesAround = -10;
      getNearIndexes(chosen, rows, columns).forEach(ceilIndex => {
        ceils[ceilIndex].minesAround += 1;
      });
    });
  }
  return {
    rows,
    columns,
    ceils,
    mines,
  };
}

function autoCeils(state, index) {
  const { rows, columns } = state;
  const ceils = state.ceils.map(ceil => ({
    ...ceil,
    walked: false,
  }));
  return walkCeils(index);
  function walkCeils(index) {
    const ceil = ceils[index];
    if (ceil.walked || ceil.minesAround < 0 || ceil.state === 'flag') return [];
    ceil.walked = true;
    if (ceil.minesAround > 0) return [index];
    return [
      index,
      ...getNearIndexes(index, rows, columns).reduce(
        (lastIndexes, ceilIndex) => {
          return [...lastIndexes, ...walkCeils(ceilIndex)];
        },
        [],
      ),
    ];
  }
}

function getNearIndexes(index, rows, columns) {
  const row = Math.floor(index / columns);
  const column = index % columns;
  return [
    index - columns - 1,
    index - columns,
    index - columns + 1,
    index - 1,
    index + 1,
    index + columns - 1,
    index + columns,
    index + columns + 1,
  ].filter((_, arrayIndex) => {
    if (row === 0 && arrayIndex < 3) return false;
    if (row === rows - 1 && arrayIndex > 4) return false;
    if (column === 0 && [0, 3, 5].includes(arrayIndex)) return false;
    if (column === columns - 1 && [2, 4, 7].includes(arrayIndex)) return false;
    return true;
  });
}

function useTimer(status) {
  const [seconds, setSeconds] = useState(0);
  function addSecond() {
    setSeconds(sec => sec + 1);
  }
  useEffect(() => {
    let timer;
    switch (status) {
      case 'started':
        timer = setInterval(addSecond, 1000);
        break;
      case 'new':
        setSeconds(0);
        break;
      default:
        break;
    }
    return () => clearInterval(timer);
  }, [status]);
  return seconds;
}

export default MineSweeper;
