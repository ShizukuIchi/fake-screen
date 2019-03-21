import React, { useReducer, useEffect, useRef } from 'react';
import Footer from 'src/themes/WinXP/Footer';
import styled from 'styled-components';

import { defaultIconState, defaultAppState, appSettings } from './apps';
import { InternetExplorer, Minesweeper } from './apps';
import Windows from './Windows';
import Icons from './Icons';

const initState = {
  apps: defaultAppState,
  nextAppID: defaultAppState.length,
  focusing: 'window',
  icons: defaultIconState,
};
const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'ADD_APP':
      return {
        ...state,
        apps: [...state.apps, { ...action.payload, id: state.nextAppID }],
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
    case 'FOCUS_APP': {
      const app = state.apps.find(app => app.id === action.payload);
      const restApps = [...state.apps.filter(app => app.id !== action.payload)];
      return {
        ...state,
        apps: app ? [...restApps, { ...app, minimized: false }] : restApps,
        focusing: 'window',
      };
    }
    case 'MINIMIZE_APP': {
      const app = state.apps.find(app => app.id === action.payload);
      const restApps = state.apps.filter(app => app.id !== action.payload);
      return {
        ...state,
        apps: app ? [...restApps, { ...app, minimized: true }] : restApps,
        focusing: 'window',
      };
    }
    case 'TOGGLE_MAXIMIZE_APP': {
      const app = state.apps.find(app => app.id === action.payload);
      const restApps = state.apps.filter(app => app.id !== action.payload);
      return {
        ...state,
        apps: app
          ? [...restApps, { ...app, maximized: !app.maximized }]
          : restApps,
        focusing: 'window',
      };
    }
    case 'FOCUS_ICON':
      const icons = state.icons.map(icon => {
        if (icon.component === action.payload)
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
  function onFocusApp(id) {
    dispatch({ type: 'FOCUS_APP', payload: id });
  }
  function onMaximizeWindow(id) {
    if (getFocusedAppId() === id && state.focusing === 'window') {
      dispatch({ type: 'TOGGLE_MAXIMIZE_APP', payload: id });
    }
  }
  function onMinimizeWindow(id) {
    if (getFocusedAppId() === id && state.focusing === 'window') {
      dispatch({ type: 'MINIMIZE_APP', payload: id });
    }
  }
  function onMouseDownFooterApp(id) {
    if (getFocusedAppId() === id) {
      dispatch({ type: 'MINIMIZE_APP', payload: id });
    } else {
      dispatch({ type: 'FOCUS_APP', payload: id });
    }
  }
  function onCloseApp(id) {
    if (getFocusedAppId() === id && state.focusing === 'window') {
      dispatch({ type: 'DEL_APP', payload: id });
    }
  }
  function onMouseDownIcon(component) {
    dispatch({ type: 'FOCUS_ICON', payload: component });
  }
  function onDoubleClickIcon(appSetting) {
    dispatch({ type: 'ADD_APP', payload: appSetting });
  }
  function getFocusedAppId() {
    const lastIndex = state.apps.map(app => app.minimized).lastIndexOf(false);
    return lastIndex >= 0 && state.focusing === 'window'
      ? state.apps[lastIndex].id
      : -1;
  }
  function onMouseDownFooter() {
    dispatch({ type: 'FOCUS_DESKTOP' });
  }
  function onClickMenuItem(o) {
    if (o === 'Internet')
      dispatch({ type: 'ADD_APP', payload: appSettings['Internet Explorer'] });
    else if (o === 'Minesweeper')
      dispatch({ type: 'ADD_APP', payload: appSettings.Minesweeper });
    else dispatch({ type: 'ADD_APP', payload: appSettings.Error });
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
  const focusedAppId = getFocusedAppId();
  return (
    <Container ref={ref}>
      <Icons
        icons={state.icons}
        onMouseDown={onMouseDownIcon}
        onDoubleClick={onDoubleClickIcon}
        displayFocus={state.focusing === 'icon'}
        appSettings={appSettings}
      />
      <Windows
        apps={state.apps}
        onMouseDown={onFocusApp}
        onClose={onCloseApp}
        onMinimize={onMinimizeWindow}
        onMaximize={onMaximizeWindow}
        focusedAppId={focusedAppId}
      />
      <Footer
        apps={state.apps}
        onMouseDownApp={onMouseDownFooterApp}
        focusedAppId={focusedAppId}
        onMouseDown={onMouseDownFooter}
        onClickMenuItem={onClickMenuItem}
      />
    </Container>
  );
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  font-family: Tahoma, 'Noto Sans', sans-serif;
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
