import React, { useRef } from 'react';
import { useWindowSize } from 'react-use';
import useElementResize from 'src/hooks/useElementResize';
import styled from 'styled-components';

function Windows({ apps, onMouseDown, onClose, onMinimize, onMaximize }) {
  return apps.map(app => (
    <StyledWindow
      show={!app.minimized}
      key={app.id}
      id={app.id}
      onMouseDown={onMouseDown}
      onMouseUpClose={onClose}
      onMouseUpMinimize={onMinimize}
      onMouseUpMaximize={onMaximize}
      {...app}
    >
      <app.component onClose={onClose.bind(null, app.id)} />
    </StyledWindow>
  ));
}

function Window({
  children,
  id,
  onMouseDown,
  onMouseUpClose,
  onMouseUpMinimize,
  onMouseUpMaximize,
  title,
  defaultSize,
  defaultOffset,
  resizable,
  headerIcon,
  maximized,
  className,
}) {
  function _onMouseDown() {
    onMouseDown(id);
  }
  function _onMouseUpClose() {
    onMouseUpClose(id);
  }
  function _onMouseUpMinimize() {
    onMouseUpMinimize(id);
  }
  function _onMouseUpMaximize() {
    if (resizable) onMouseUpMaximize(id);
  }
  const dragRef = useRef(null);
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const { offset, size } = useElementResize(ref, {
    dragRef,
    defaultOffset,
    defaultSize,
    boundary: {
      top: 1,
      right: windowWidth - 1,
      bottom: windowHeight - 31,
      left: 1,
    },
    resizable,
    resizeThreshold: 10,
  });
  let width, height, x, y;
  if (maximized) {
    width = windowWidth + 6;
    height = windowHeight - 24;
    x = -3;
    y = -3;
  } else {
    width = size.width;
    height = size.height;
    x = offset.x;
    y = offset.y;
  }
  return (
    <div
      className={className}
      ref={ref}
      onMouseDown={_onMouseDown}
      style={{
        transform: `translate(${x}px,${y}px)`,
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
      <div className="header__bg" />
      <header className="app__header" ref={dragRef}>
        <img src={headerIcon} alt={title} className="app__header__icon" />
        <div className="app__header__title">{title}</div>
        <div className="app__header__buttons">
          <button
            className="app__header__minimize"
            onMouseUp={_onMouseUpMinimize}
          />
          <button
            className={`app__header__maximize ${resizable ? '' : 'disable'}`}
            onMouseUp={_onMouseUpMaximize}
          />
          <button className="app__header__close" onMouseUp={_onMouseUpClose} />
        </div>
      </header>
      <div className="app__content">{children}</div>
    </div>
  );
}

const StyledWindow = styled(Window)`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: absolute;
  padding: 3px;
  background-color: #0831d9;
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  .header__bg {
    background: linear-gradient(
      to bottom,
      #0058ee 0%,
      #3593ff 4%,
      #288eff 6%,
      #127dff 8%,
      #036ffc 10%,
      #0262ee 14%,
      #0057e5 20%,
      #0054e3 24%,
      #0055eb 56%,
      #005bf5 66%,
      #026afe 76%,
      #026afe 86%,
      #0061fc 92%,
      #005cf7 94%,
      #0044d1 100%
    );
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 28px;
    pointer-events: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .app__header {
    height: 25px;
    line-height: 25px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Noto Sans';
    text-shadow: 1px 1px #000;
    color: white;
    position: absolute;
    left: 3px;
    right: 3px;
    display: flex;
    align-items: center;
  }
  .app__header__icon {
    pointer-events: none;
    width: 15px;
    height: 15px;
    margin-left: 1px;
    margin-right: 3px;
  }
  .app__header__title {
    flex: 1;
    pointer-events: none;
    padding-right: 5px;
    letter-spacing: 0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .app__header__buttons {
    height: 22px;
    display: flex;
    align-items: center;
    margin-top: -1px;
    margin-right: 1px;
    button {
      margin-right: 1px;
      position: relative;
      width: 22px;
      height: 22px;
      border: 1px solid #fff;
      border-radius: 3px;
      &:hover {
        filter: brightness(120%);
      }
    }
  }
  .app__header__minimize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(
      circle at 90% 90%,
      #0054e9 0%,
      #2263d5 55%,
      #4479e4 70%,
      #a3bbec 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      left: 4px;
      top: 13px;
      height: 3px;
      width: 8px;
      background-color: white;
    }
  }
  .app__header__maximize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(
      circle at 90% 90%,
      #0054e9 0%,
      #2263d5 55%,
      #4479e4 70%,
      #a3bbec 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: 4px;
      top: 4px;
      box-shadow: inset 0 3px white, inset 0 0 0 1px white;
      height: 12px;
      width: 12px;
    }
  }
  .app__header__maximize.disable {
    outline: none;
    opacity: 0.5;
    &:hover {
      filter: brightness(100%);
    }
  }
  .app__header__close {
    box-shadow: inset 0 -1px 2px 1px #da4600;
    background-image: radial-gradient(
      circle at 90% 90%,
      #cc4600 0%,
      #dc6527 55%,
      #cd7546 70%,
      #ffccb2 90%,
      white 100%
    );
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
    margin-top: 25px;
    height: calc(100% - 25px);
  }
`;

export default Windows;
