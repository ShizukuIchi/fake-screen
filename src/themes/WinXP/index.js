import React, { useReducer, useEffect, useRef } from 'react';
import Footer from './Footer';
import MineSweeper from './MineSweeper';
import IE from './InternetExplorer';
import styled from 'styled-components';
import Windows from './Windows';
import ie from './ie.png';

// there should be a config (icons, apps), app should have multiInstance, isFullScreen, resizable, defaultPosition property

const initState = {
  apps: [{ component: MineSweeper, title: 'Mine Sweeper', id: 0 }],
  nextAppID: 1,
  focusing: 'window',
  icons: [
    {
      image: ie,
      isFocus: false,
      name: 'Internet Explorer',
      component: IE,
    },
    {
      image: ie,
      isFocus: false,
      name: 'Mine Sweeper',
      component: MineSweeper,
    },
  ],
};
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD_APP':
      const { component, title } = action.payload;
      return {
        ...state,
        apps: [...state.apps, { component, id: state.nextAppID, title }],
        nextAppID: state.nextAppID + 1,
        focusing: 'window',
      };
    case 'DEL_APP':
      return {
        ...state,
        apps: state.apps.filter(app => app.id !== action.payload),
        focusing:
          state.apps.length > 1
            ? 'window'
            : state.icons.find(icon => icon.isFocus)
            ? 'icon'
            : 'desktop',
      };
    case 'FOCUS_APP':
      return {
        ...state,
        apps: [
          ...state.apps.filter(app => app.id !== action.payload),
          state.apps.find(app => app.id === action.payload),
        ],
        focusing: 'window',
      };
    case 'FOCUS_ICON':
      const icons = state.icons.map(icon => {
        if (icon.name === action.payload)
          return {
            ...icon,
            isFocus: true,
          };
        else
          return {
            ...icon,
            isFocus: false,
          };
      });
      return {
        ...state,
        focusing: 'icon',
        icons,
      };
    case 'FOCUS_DESKTOP':
      return {
        ...state,
        focusing: 'desktop',
        icons: state.icons.map(icon => ({
          ...icon,
          isFocus: false,
        })),
      };
    default:
      return state;
  }
};

function WinXP() {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(reducer, initState);
  function onClickApp(id) {
    dispatch({ type: 'FOCUS_APP', payload: id });
  }
  function onCloseApp(id) {
    // delete if is focus
    if (state.apps[state.apps.length - 1].id === id) {
      dispatch({ type: 'DEL_APP', payload: id });
    }
  }
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    function onMouseDown(e) {
      if (e.target !== target) return;
      dispatch({ type: 'FOCUS_DESKTOP' });
    }
    window.addEventListener('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);
  return (
    <Container ref={ref}>
      {state.icons.map(icon => (
        <div
          key={icon.name}
          className="icon__test"
          onMouseDown={() => {
            dispatch({ type: 'FOCUS_ICON', payload: icon.name });
          }}
          onDoubleClick={() => {
            const { component, name } = icon;
            dispatch({ type: 'ADD_APP', payload: { component, title: name } });
          }}
        >
          <img src={icon.image} alt="ie" className="button__test" />
          <div
            style={{
              backgroundColor:
                icon.isFocus && state.focusing === 'icon'
                  ? '#005aff'
                  : 'transparent',
            }}
            className="icon__test__text"
          >
            {icon.name}
          </div>
        </div>
      ))}
      <Footer onMouseDown={() => dispatch({ type: 'FOCUS_DESKTOP' })} />
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
  overflow: hidden;
  position: relative;
  background: url(https://i.imgur.com/Zk6TR5k.jpg) no-repeat center center fixed;
  background-size: cover;
  * {
    user-select: none;
  }
  .icon__test {
    width: 60px;
    margin: 60px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    &__text {
      width: 100%;
      font-size: 10px;
      color: white;
      text-shadow: 0.5px 0.5px 1px black;
      text-align: center;
    }
  }
  .button__test {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 0;
  }
`;

export default WinXP;
