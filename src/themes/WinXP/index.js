import React, { useReducer } from 'react';
import Footer from './Footer';
import MineSweeper from './MineSweeper';
import IE from './InternetExplorer';
import styled from 'styled-components';
import Windows from './Windows';

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

function WinXP() {
  const [state, dispatch] = useReducer(reducer, initState);
  function onClickApp(id) {
    dispatch({ type: 'FOCUS_APP', payload: id });
  }
  function onCloseApp(id) {
    dispatch({ type: 'DEL_APP', payload: id });
  }
  return (
    <Container>
      <button
        className="button__test"
        onClick={() => {
          dispatch({ type: 'ADD_APP', payload: MineSweeper });
        }}
      >
        Mine
      </button>
      <button
        className="button__test"
        onClick={() => {
          dispatch({ type: 'ADD_APP', payload: IE });
        }}
      >
        IE
      </button>
      <Footer />
      <Windows
        apps={state.apps}
        onMouseDown={onClickApp}
        onCloseWindow={onCloseApp}
      />
      <div className="dummy" style={{ height: '200%' }} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: auto;
  position: relative;
  * {
    user-select: none;
  }

  .button__test {
    margin-top: 50px;
  }
`;

export default WinXP;
