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
      <header className="mine__header">
        <span>{`mines: ${remainMines()}`}</span>
        <button onClick={() => onReset()}>Smile</button>
        <button onClick={() => onReset('Beginner')}>Beginner</button>
        <button onClick={() => onReset('Intermediate')}>Intermediate</button>
        <button onClick={() => onReset('Expert')}>Expert</button>
      </header>
      <section className="mine__content">
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

function Ceils({ ceils, onLeftClickCeil, onRightClickCeil }) {
  function ceilText(ceil) {
    const { state, minesAround } = ceil;
    if (state === 'open') {
      return minesAround >= 0 ? minesAround : 'x';
    }
    if (state === 'cover') return null;
    return state[0];
  }
  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      state={ceil.state}
      index={index}
      onLeftClick={onLeftClickCeil}
      onRightClick={onRightClickCeil}
    >
      {ceilText(ceil)}
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
  return (
    <div
      className="mine__ceil"
      style={{ background: state === 'open' ? 'pink' : 'gray' }}
      onClick={_onLeftClick}
      onContextMenu={_onRightClick}
    >
      {children}
    </div>
  );
}

export default styled(MineSweeperView)`
  .mine__header {
    height: 30px;
    background-color: white;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 20px);
    grid-template-rows: repeat(${({ rows }) => rows}, 20px);
    background-color: white;
    grid-gap: 2px;
  }
  .mine__ceil {
    line-height: 20px;
    text-align: center;
  }
`;
