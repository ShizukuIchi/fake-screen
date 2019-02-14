import React, { useReducer, useEffect } from 'react';
import sampleSize from 'lodash.samplesize';

import MineSweeperView from './MineSweeperView';

const initState = {
  difficulty: 'easy',
  rows: 10,
  columns: 10,
  ceils: Array(100)
    .fill()
    .map(_ => ({ state: 'cover', minesAround: 0 })),
  first: true,
};

function reducer(state = initState, action = {}) {
  switch (action.type) {
    case 'CLEAR_MAP':
      return initState;
    case 'START_GAME':
      const excludeIndex = action.payload;
      const gameConfig = genGameConfig(state.difficulty, excludeIndex);
      return {
        ...state,
        ...gameConfig,
        first: false,
      };
    case 'OPEN_CEIL':
      const indexes = openCeils(state, action.payload);
      const ceils2 = [...state.ceils];
      indexes.forEach(i => {
        const ceil = ceils2[i];
        ceils2[i] = { ...ceil, state: 'open' };
      });
      return {
        ...state,
        ceils: ceils2,
      };
    case 'CHANGE_CEIL_STATE':
      const { index, ceilState: newState } = action.payload;
      const ceil = state.ceils[index];
      const ceils = [...state.ceils];
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

function MineSweeper() {
  const [state, dispatch] = useReducer(reducer, initState);
  function onChangeCeilState(index, ceilState) {
    if (state.first) {
      dispatch({ type: 'START_GAME', payload: index });
      dispatch({ type: 'OPEN_CEIL', payload: index });
    } else if (ceilState === 'open') {
      dispatch({ type: 'OPEN_CEIL', payload: index });
    } else {
      dispatch({ type: 'CHANGE_CEIL_STATE', payload: { index, ceilState } });
    }
  }
  function onClear() {
    dispatch({ type: 'CLEAR_MAP' });
  }
  function onChangeDifficulty(difficulty) {
    dispatch({ type: 'CHANGE_DIFFICULTY', payload: difficulty });
  }
  return (
    <MineSweeperView
      ceils={state.ceils}
      onChangeCeilState={onChangeCeilState}
      onReset={onClear}
      onChangeDifficulty={onChangeDifficulty}
    />
  );
}

function genGameConfig(difficulty, exclude) {
  const rows = 10;
  const columns = 10;
  const emptyArray = [...Array(rows * columns).keys()];
  const ceils = emptyArray.map(_ => ({
    state: 'cover',
    minesAround: 0,
  }));
  sampleSize(emptyArray.filter(i => i !== exclude), 20).forEach(chosen => {
    const chosenCeil = ceils[chosen];
    chosenCeil.minesAround = -100;
    const _row = Math.floor(chosen / rows);
    const _column = chosen % columns;
    [
      chosen - columns - 1,
      chosen - columns,
      chosen - columns + 1,
      chosen - 1,
      chosen + 1,
      chosen + columns - 1,
      chosen + columns,
      chosen + columns + 1,
    ]
      .filter((_, arrayIndex) => {
        if (_row === 0 && arrayIndex < 3) return false;
        if (_row === rows - 1 && arrayIndex > 4) return false;
        if (_column === 0 && [0, 3, 5].includes(arrayIndex)) return false;
        if (_column === columns - 1 && [2, 4, 7].includes(arrayIndex))
          return false;
        return true;
      })
      .forEach(ceilIndex => {
        ceils[ceilIndex].minesAround += 1;
      });
  });
  return {
    rows,
    columns,
    ceils,
  };
}

function openCeils(state, index) {
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
    const _row = Math.floor(index / rows);
    const _column = index % columns;
    return [
      index,
      ...[
        index - columns - 1,
        index - columns,
        index - columns + 1,
        index - 1,
        index + 1,
        index + columns - 1,
        index + columns,
        index + columns + 1,
      ]
        .filter((_, arrayIndex) => {
          if (_row === 0 && arrayIndex < 3) return false;
          if (_row === rows - 1 && arrayIndex > 4) return false;
          if (_column === 0 && [0, 3, 5].includes(arrayIndex)) return false;
          if (_column === columns - 1 && [2, 4, 7].includes(arrayIndex))
            return false;
          return true;
        })
        .reduce((lastIndexes, ceilIndex) => {
          return [...lastIndexes, ...walkCeils(ceilIndex)];
        }, indexes),
    ];
  }
}

export default MineSweeper;
