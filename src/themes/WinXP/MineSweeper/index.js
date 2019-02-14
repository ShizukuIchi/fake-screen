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
    case 'CHANGE_CEIL_STATE':
      const { index, state: newState } = action.payload;
      const ceil = state.ceils[index];
      const ceils = [...state.ceils];
      ceils[index] = { ...ceil, state: newState };
      return {
        ...state,
        ceils,
        first: false,
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
    if (state.first) return dispatch({ type: 'START_GAME', payload: index });
    dispatch({ type: 'CHANGE_CEIL_STATE', payload: { index, ceilState } });
  }
  function onClear() {
    dispatch({ type: 'RESET_GAME' });
  }
  function onChangeDifficulty(difficulty) {
    dispatch({ type: 'CHANGE_DIFFICULTY', payload: difficulty });
  }
  useEffect(() => {
    dispatch({ type: 'RESET_GAME' });
  }, []);
  return (
    <MineSweeperView
      state={state}
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
  if (exclude) ceils[exclude].state = 'open';
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
      .map((ceilIndex, arrayIndex) => {
        if (_row === 0 && arrayIndex < 3) return -1;
        if (_row === rows - 1 && arrayIndex > 4) return -1;
        if (_column === 0 && [0, 3, 5].includes(arrayIndex)) return -1;
        if (_column === columns - 1 && [2, 4, 7].includes(arrayIndex))
          return -1;
        return ceilIndex;
      })
      .forEach(ceilIndex => {
        if (ceilIndex === -1) return;
        ceils[ceilIndex].minesAround += 1;
      });
  });
  return {
    rows,
    columns,
    ceils,
  };
}

export default MineSweeper;
