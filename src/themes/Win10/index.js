import React, { useState, useReducer } from 'react';
import Footer from './Win10View';
import MineSweeper from './MineSweeper';
import IE from './InternetExplorer';
import styled from 'styled-components';

const initState = {
  apps: [],
  nextID: 0,
};
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD_APP':
      return {
        ...state,
        apps: [...state.apps, { component: action.payload, id: state.nextID }],
        nextID: state.nextID + 1,
      };
    case 'DEL_APP':
      return {
        ...state,
        apps: state.apps.filter(app => app.id !== action.payload),
      };
    case 'FOCUS_APP':
      return {
        ...state,
        apps: [
          ...state.apps.filter(app => app.id !== action.payload),
          state.apps.find(app => app.id === action.payload),
        ],
      };
    default:
      return state;
  }
};

function Win10() {
  const [state, dispatch] = useReducer(reducer, initState);
  function onClickApp(id) {
    dispatch({ type: 'FOCUS_APP', payload: id });
  }
  return (
    <StyledWin10>
      <button
        onClick={() => {
          dispatch({ type: 'ADD_APP', payload: IE });
        }}
      >
        add window
      </button>
      <Footer />
      {state.apps.map(app => (
        <Window onMouseDown={() => onClickApp(app.id)} key={app.id}>
          {<app.component />}
        </Window>
      ))}
    </StyledWin10>
  );
}

const Window = styled.div`
  position: 'absolute';
  width: 0;
  height: 0;
`;

const StyledWin10 = styled.div`
  height: 100%;
  overflow: hidden;
  * {
    user-select: none;
  }

  button {
    margin-top: 50px;
  }
`;

export default Win10;
