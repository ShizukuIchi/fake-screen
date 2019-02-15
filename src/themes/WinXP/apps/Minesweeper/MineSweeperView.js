import React from 'react';
import styled from 'styled-components';

function MineSweeperView({
  ceils,
  className,
  changeCeilState,
  onReset,
  openCeil,
  mines,
}) {
  function remainMines() {
    return mines - ceils.filter(ceil => ceil.state === 'flag').length;
  }
  return (
    <div className={className}>
      <div className="mine__top-bar">
        {['Game', 'Help'].map(text => (
          <div className="mine__top-bar__text">{text}</div>
        ))}
      </div>
      <section className="mine__content">
        <div className="mine__score-bar">
          <span>{remainMines()}</span>
          <button onClick={() => onReset()}>:)</button>
          <button onClick={() => onReset('Beginner')}>Be</button>
          <button onClick={() => onReset('Intermediate')}>In</button>
          <button onClick={() => onReset('Expert')}>Ex</button>
        </div>
        <div className="mine__content__inner">
          <Ceils
            ceils={ceils}
            onLeftClickCeil={openCeil}
            onRightClickCeil={changeCeilState}
          />
        </div>
      </section>
    </div>
  );
}
function getTextColor(index) {
  return ',blue,green,red,darkblue,darkred,darkgreen,black,lightgray'.split(
    ',',
  )[index];
}
function Ceils({ ceils, onLeftClickCeil, onRightClickCeil }) {
  function ceilContent(ceil) {
    const { state, minesAround } = ceil;
    switch (state) {
      case 'open':
        switch (true) {
          case minesAround === 0:
            return null;
          case minesAround < 0:
            return 'x';
          default:
            return (
              <span style={{ color: getTextColor(minesAround) }}>
                {minesAround}
              </span>
            );
        }
      case 'unknown':
        return <span>u</span>;
      case 'flag':
        return (
          <>
            <div className="mine__flag__top" />
            <div className="mine__flag__bar" />
            <div className="mine__flag__bottom" />
            <div className="mine__flag__bbottom" />
          </>
        );
      default:
        return null;
    }
  }
  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      state={ceil.state}
      index={index}
      onLeftClick={onLeftClickCeil}
      onRightClick={onRightClickCeil}
    >
      {ceilContent(ceil)}
    </Ceil>
  ));
}

function Ceil({ state, children, index, onLeftClick, onRightClick }) {
  function _onLeftClick() {
    onLeftClick(index);
  }
  function _onRightClick(e) {
    e.preventDefault();
    onRightClick(index);
  }
  function getLeftTopBorderStyle() {
    if (state === 'open') return 'rgb(120, 120, 120) solid 1px';
    return 'rgb(245, 245, 245) solid 2px';
  }
  function getBottomRightBorderStyle() {
    if (state === 'open') return 'transparent solid 1px';
    return 'rgb(120, 120, 120) solid 2px';
  }
  return (
    <div
      className="mine__ceil"
      onClick={_onLeftClick}
      style={{
        borderLeft: getLeftTopBorderStyle(),
        borderTop: getLeftTopBorderStyle(),
        borderRight: getBottomRightBorderStyle(),
        borderBottom: getBottomRightBorderStyle(),
      }}
      onContextMenu={_onRightClick}
    >
      {children}
    </div>
  );
}

export default styled(MineSweeperView)`
  .mine__top-bar {
    display: flex;
    height: 20px;
    padding: 5px;
    background-color: #dfded5;
  }
  .mine__top-bar__text {
    line-height: 100%;
    font-size: 10px;
    margin-right: 8px;
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 4px;
    background-color: rgb(180, 180, 180);
    padding: 5px;
  }
  .mine__score-bar {
    height: 30px;
    border-radius: 1px;
    border-top: rgb(120, 120, 120) solid 2px;
    border-left: rgb(120, 120, 120) solid 2px;
    border-right: rgb(245, 245, 245) solid 2px;
    border-bottom: rgb(245, 245, 245) solid 2px;
    margin-bottom: 5px;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 18px);
    grid-template-rows: repeat(${({ rows }) => rows}, 18px);
    border-top: rgb(120, 120, 120) solid 3px;
    border-left: rgb(120, 120, 120) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
  }
  .mine__ceil {
    text-align: center;
    border-bottom: rgb(120, 120, 120) solid 2px;
    border-right: rgb(120, 120, 120) solid 2px;
    border-top: rgb(245, 245, 245) solid 2px;
    border-left: rgb(245, 245, 245) solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: relative;
  }
  .mine__flag {
    &__top {
      position: absolute;
      top: 1px;
      left: 2px;
      border-style: solid;
      border-width: 3px 6px 4px 0;
      border-color: transparent #df0000 transparent transparent;
    }
    &__bar {
      position: absolute;
      left: 7px;
      top: 8px;
      width: 1px;
      height: 3px;
      background-color: black;
    }
    &__bottom {
      position: absolute;
      width: 5.5px;
      height: 1px;
      background-color: black;
      top: 10px;
      left: 4px;
    }
    &__bbottom {
      position: absolute;
      width: 8px;
      height: 2px;
      background-color: black;
      top: 11px;
      left: 3px;
    }
  }
`;
