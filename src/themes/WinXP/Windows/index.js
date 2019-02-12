import React, { useRef } from 'react';
import useElementResize from 'src/hooks/useElementResize';

import styled from 'styled-components';

function Windows({ apps, onMouseDown, onCloseWindow }) {
  return apps.map(app => (
    <Window
      key={app.id}
      onMouseDown={onMouseDown.bind(null, app.id)}
      onCloseWindow={onCloseWindow.bind(null, app.id)}
    >
      <app.component />
    </Window>
  ));
}

function Window({ children, onCloseWindow, ...rest }) {
  const dragRef = useRef(null);
  const ref = useRef(null);
  const { offset, size } = useElementResize(ref, dragRef, {
    width: 600,
    height: 600,
  });
  return (
    <StyledWindow
      ref={ref}
      {...rest}
      style={{
        transform: `translate(${offset.x}px,${offset.y}px)`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <header className="app__header" ref={dragRef}>
        <button className="app__header__close" onClick={onCloseWindow}>
          x
        </button>
        app header
      </header>
      <div className="app__content">{children}</div>
    </StyledWindow>
  );
}

const StyledWindow = styled.div`
  display: inline-block;
  position: absolute;
  padding: 10px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  .app__header {
    height: 20px;
    background-color: blue;
    color: white;
    position: relative;
    display: flex;
  }
  .app__header__close {
    position: absolute;
    right: 0;
    height: 20px;
    width: 20px;
  }
  .app__content {
    flex: 1;
    position: relative;
    overflow: auto;
  }
`;

export default Windows;
