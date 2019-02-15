import React, { useRef } from 'react';
import useElementResize from 'src/hooks/useElementResize';
import styled from 'styled-components';

import ie from '../ie.png';
function Windows({ apps, onMouseDown, onCloseWindow }) {
  return apps.map(app => (
    <Window
      key={app.id}
      onMouseDown={onMouseDown.bind(null, app.id)}
      onCloseWindow={onCloseWindow.bind(null, app.id)}
      title={app.title}
    >
      <app.component />
    </Window>
  ));
}

function Window({ children, onCloseWindow, onMouseDown, title }) {
  const dragRef = useRef(null);
  const ref = useRef(null);
  const { offset, size } = useElementResize(ref, {
    dragRef,
    offset: {
      x: Math.floor(Math.random() * 200) + 100,
      y: Math.floor(Math.random() * 50),
    },
    size: {
      width: 700,
      height: 500,
    },
    boundary: {
      top: 1,
      right: window.innerWidth - 1,
      bottom: window.innerHeight - 31,
      left: 1,
    },
    resizable: true,
    resizeThreshold: 10,
  });
  return (
    <StyledWindow
      ref={ref}
      onMouseDown={onMouseDown}
      style={{
        transform: `translate(${offset.x}px,${offset.y}px)`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="header__bg" />
      <header className="app__header" ref={dragRef}>
        <img src={ie} alt="ie" className="app__header__icon" />
        <button className="app__header__close" onMouseUp={onCloseWindow} />
        <span className="app__header__title">{title}</span>
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
    background: linear-gradient(
      to bottom,
      #0058ee 0%,
      #3f87ff 3%,
      #2b80ff 7%,
      #0352ff 10%,
      #0345f1 14%,
      #003ce9 17%,
      #0634e3 24%,
      #0635e5 48%,
      #063af5 66%,
      #164afe 76%,
      #164afe 86%,
      #0630fc 93%,
      #0831d9 100%
    );
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 30px;
    pointer-events: none;
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
    pointer-events: none;
    width: 18px;
    height: 18px;
    margin-left: 1px;
    margin-right: 3px;
  }
  .app__header__title {
    pointer-events: none;
  }
  .app__header__close {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 22px;
    height: 22px;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: #ff4701;
    &:hover {
      background-color: #ff652a;
    }
    &:before {
      content: '';
      position: absolute;
      left: 9px;
      top: 2px;
      transform: rotate(45deg);
      height: 16px;
      width: 2px;
      background-color: white;
    }
    &:after {
      content: '';
      position: absolute;
      left: 9px;
      top: 2px;
      transform: rotate(-45deg);
      height: 16px;
      width: 2px;
      background-color: white;
    }
  }
  .app__content {
    flex: 1;
    position: relative;
    overflow: auto;
  }
`;

export default Windows;
