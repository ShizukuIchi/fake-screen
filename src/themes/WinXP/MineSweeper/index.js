import React, { useReducer } from 'react';
import sampleSize from 'lodash.samplesize';

import { Config } from './config';
import MineSweeperView from './MineSweeperView';

function getInitState(difficulty = 'Beginner') {
  return {
    difficulty,
    started: false,
    ...genGameConfig({ ...Config[difficulty], empty: true }),
  };
}

function reducer(state, action = {}) {
  switch (action.type) {
    case 'CLEAR_MAP':
      const difficulty = action.payload || state.difficulty;
      return {
        ...state,
        difficulty,
        ...genGameConfig({ ...Config[difficulty], empty: true }),
        started: false,
      };
    case 'START_GAME':
      const exclude = action.payload;
      return {
        ...state,
        ...genGameConfig({ ...Config[state.difficulty], exclude }),
        started: true,
      };
    case 'OPEN_CEIL':
      const indexes = autoCeils(state, action.payload);
      const _ceils = [...state.ceils];
      indexes.forEach(i => {
        const ceil = _ceils[i];
        _ceils[i] = { ...ceil, state: 'open' };
      });
      return {
        ...state,
        ceils: _ceils,
      };
    case 'CHANGE_CEIL_STATE':
      const index = action.payload;
      const ceil = state.ceils[index];
      const ceils = [...state.ceils];
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
    case 'CHANGE_DIFFICULTY':
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
}

function MineSweeper({ defaultDifficulty }) {
  const [state, dispatch] = useReducer(
    reducer,
    getInitState(defaultDifficulty),
  );
  function changeCeilState(index) {
    const ceil = state.ceils[index];
    if (ceil.state === 'open') return;
    dispatch({ type: 'CHANGE_CEIL_STATE', payload: index });
  }
  function openCeil(index) {
    if (!state.started) {
      dispatch({ type: 'START_GAME', payload: index });
      dispatch({ type: 'OPEN_CEIL', payload: index });
    } else {
      const ceil = state.ceils[index];
      if (['flag', 'open'].includes(ceil.state)) return;
      dispatch({ type: 'OPEN_CEIL', payload: index });
    }
  }
  function onReset(difficulty) {
    dispatch({ type: 'CLEAR_MAP', payload: difficulty });
  }
  return (
    <MineSweeperView
      {...state}
      changeCeilState={changeCeilState}
      openCeil={openCeil}
      onReset={onReset}
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
    minesAround: ceil.minesAround,
    walked: false,
  }));
  return walkCeils(index);
  function walkCeils(index, indexes = []) {
    const ceil = ceils[index];
    if (ceil.walked || ceil.minesAround < 0) return indexes;
    ceil.walked = true;
    if (ceil.minesAround > 0) return [...indexes, index];
    return [
      index,
      ...getNearIndexes(index, rows, columns).reduce(
        (lastIndexes, ceilIndex) => {
          return [...lastIndexes, ...walkCeils(ceilIndex)];
        },
        indexes,
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
export default MineSweeper;
