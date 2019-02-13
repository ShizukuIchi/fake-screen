import React, { useRef } from 'react';
import useElementResize from 'src/hooks/useElementResize';
import styled from 'styled-components';

import windowHeader from '../window_header.png';
import ie from '../ie.png';
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
  const { offset, size } = useElementResize(ref, {
    dragRef,
    offset: {
      x: 0,
      y: 0,
    },
    size: {
      width: 600,
      height: 600,
    },
    resizable: true,
    resizeThreshold: 10,
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
      <img src={windowHeader} alt="window-header" className="header__bg" />
      <header className="app__header" ref={dragRef}>
        <img src={ie} alt="ie" className="app__header__icon" />
        <button className="app__header__close" onClick={onCloseWindow}>
          x
        </button>
        <span>app header</span>
      </header>
      <div className="app__content">{children}</div>
    </StyledWindow>
  );
}

const StyledWindow = styled.div`
  display: inline-block;
  position: absolute;
  padding: 3px;
  background-color: #0831d9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  .header__bg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 30px;
    pointer-events: none;
    background-image: url(${windowHeader});
  }
  .app__header {
    height: 27px;
    line-height: 27px;
    font-weight: 700;
    font-size: 12px;
    text-shadow: 1px 1px #000;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
  }
  .app__header__icon {
    width: 18px;
    height: 18px;
    margin-left: 1px;
    margin-right: 3px;
  }
  .app__header__close {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 22px;
    height: 22px;
    border: 1px solid #fff;
    border-radius: 3px;
  }
  .app__content {
    flex: 1;
    position: relative;
    overflow: auto;
  }
`;

export default Windows;
