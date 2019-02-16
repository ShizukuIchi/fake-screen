import React from 'react';
import styled from 'styled-components';

function MineSweeperView({
  ceils,
  className,
  changeCeilState,
  onReset,
  openCeil,
  mines,
  status,
  seconds,
}) {
  function remainMines() {
    return mines - ceils.filter(ceil => ceil.state === 'flag').length;
  }
  function statusFace() {
    switch (status) {
      case 'died':
        return <span>{'😵'}</span>;
      case 'won':
        return <span>{'😎'}</span>;
      default:
        return <span>{'🙂'}</span>;
    }
  }
  return (
    <div className={className}>
      <div className="mine__top-bar">
        {['Game', 'Help'].map(text => (
          <div key={text} className="mine__top-bar__text">
            {text}
          </div>
        ))}
      </div>
      <section className="mine__content">
        <div className="mine__score-bar">
          <div className="mine__digits__outer">{remainMines()}</div>
          <button className="mine__face" onClick={() => onReset()}>
            {statusFace()}
          </button>
          {/* <button onClick={() => onReset('Beginner')}>Be</button>
          <button onClick={() => onReset('Intermediate')}>In</button>
          <button onClick={() => onReset('Expert')}>Ex</button> */}
          <div className="mine__digits__outer">{seconds}</div>
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
        return '?';
      case 'flag':
        return (
          <>
            <div className="mine__flag__top" />
            <div className="mine__flag__bar" />
            <div className="mine__flag__bottom" />
            <div className="mine__flag__bottom2" />
          </>
        );
      case 'die':
        return <div className="mine__die">x</div>;
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
    if (state === 'open' || state === 'die')
      return 'rgb(120, 120, 120) solid 1px';
    return 'rgb(245, 245, 245) solid 2px';
  }
  function getBottomRightBorderStyle() {
    if (state === 'open' || state === 'die') return 'transparent solid 0px';
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
    font-size: 11px;
    margin-right: 8px;
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 3.5px;
    background-color: rgb(180, 180, 180);
    padding: 5px;
  }
  .mine__score-bar {
    height: 34px;
    border-radius: 1px;
    border-top: rgb(120, 120, 120) solid 2px;
    border-left: rgb(120, 120, 120) solid 2px;
    border-right: rgb(245, 245, 245) solid 2px;
    border-bottom: rgb(245, 245, 245) solid 2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 7px 3px 4px;
  }
  .mine__digits__outer {
    background: black;
    width: 42px;
    height: 100%;
    color: red;
    border-width: 0 1px 1px 0;
    border-style: solid;
    border-color: #fff;
    font-size: 22px;
    line-height: 22px;
  }
  .mine__face {
    width: 25px;
    height: 25px;
    background-color: rgb(180, 180, 180);
    outline: none;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 16px);
    grid-template-rows: repeat(${({ rows }) => rows}, 16px);
    border-top: rgb(120, 120, 120) solid 3px;
    border-left: rgb(120, 120, 120) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
    font-size: 14px;
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
  .mine__die {
    background-color: red;
    width: 100%;
    height: 100%;
    line-height: 13px;
  }
  .mine__flag {
    &__top {
      position: absolute;
      top: 1px;
      left: 2px;
      border-style: solid;
      border-width: 3px 5px 3px 0;
      border-color: transparent #df0000 transparent transparent;
    }
    &__bar {
      position: absolute;
      left: 6px;
      top: 7px;
      width: 1px;
      height: 3px;
      background-color: black;
    }
    &__bottom {
      position: absolute;
      width: 3px;
      height: 1px;
      background-color: black;
      top: 8px;
      left: 5px;
    }
    &__bottom2 {
      position: absolute;
      width: 7px;
      height: 2px;
      background-color: black;
      top: 9px;
      left: 3px;
    }
  }
`;
