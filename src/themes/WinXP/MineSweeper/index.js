import React, { useReducer, useEffect } from 'react';
import sampleSize from 'lodash.samplesize';

import MineSweeperView from './MineSweeperView';

const initState = {
  difficulty: 'easy',
  rows: 10,
  columns: 10,
  ceils: [],
};

function reducer(state = initState, action = {}) {
  switch (action.type) {
    case 'RESET_GAME':
      const difficulty = action.payload;
      const gameConfig = genGameConfig(difficulty);
      return {
        ...state,
        difficulty,
        ...gameConfig,
      };
    case 'CHANGE_CEIL_STATE':
      const {
        position: { x, y },
        state: newState,
      } = action.payload;
      const { columns } = state;
      const index = y * columns + x;
      const ceil = state.ceils[index];
      return {
        ...state,
        ceils: [
          ...state.ceils.slice(0, index),
          {
            ...ceil,
            state: newState,
          },
          ...state.ceils.slice(index + 1, state.ceils.length),
        ],
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
  function onChangeCeilState(position, state) {
    dispatch({ type: 'CHANGE_CEIL_STATE', payload: { position, state } });
  }
  function onReset() {
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
      onReset={onReset}
      onChangeDifficulty={onChangeDifficulty}
    />
  );
}

function genGameConfig(difficulty) {
  const rows = 10;
  const columns = 10;
  const emptyArray = [...Array(rows * columns).keys()];
  const ceils = emptyArray.map(_ => ({
    state: 'cover',
    minesAround: 0,
  }));
  sampleSize(emptyArray, 20).forEach(chosen => {
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
