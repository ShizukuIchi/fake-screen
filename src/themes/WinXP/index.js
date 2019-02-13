import React, { useReducer } from 'react';
import Footer from './Footer';
import MineSweeper from './MineSweeper';
import IE from './InternetExplorer';
import styled from 'styled-components';
import Windows from './Windows';
import ie from './ie.png';

const initState = {
  apps: [{ component: IE, id: 0 }],
  nextID: 1,
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
        style={{ backgroundImage: `url(${ie})` }}
        onClick={() => {
          dispatch({ type: 'ADD_APP', payload: IE });
        }}
      />
      <Footer />
      <Windows
        apps={state.apps}
        onMouseDown={onClickApp}
        onCloseWindow={onCloseApp}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: auto;
  position: relative;
  background: url(https://i.imgur.com/Zk6TR5k.jpg) no-repeat center center fixed;
  background-size: cover;
  * {
    user-select: none;
  }

  .button__test {
    margin-top: 50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 0;
  }
`;

export default WinXP;
