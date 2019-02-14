import React from 'react';
import styled from 'styled-components';

function MineSweeperView({
  ceils,
  onChangeCeilState,
  onReset,
  onChangeDifficulty,
}) {
  function remainMines() {
    return (
      ceils.filter(ceil => ceil.minesAround < 0).length -
      ceils.filter(ceil => ceil.state === 'flag').length
    );
  }
  return (
    <Div>
      <header
        className="mine__header"
        onClick={onReset}
      >{`mines: ${remainMines()}`}</header>
      <section className="mine__content">
        <div className="mine__content__inner">
          <Ceils ceils={ceils} onClickCeil={onChangeCeilState} />
        </div>
      </section>
    </Div>
  );
}

function Ceils({ ceils, onClickCeil }) {
  function _onClickCeil(index) {
    onClickCeil(index, 'open');
  }
  function onRightClickCeil(index) {
    onClickCeil(index, 'flag');
  }
  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      ceil={ceil}
      index={index}
      onClick={_onClickCeil}
      onRightClick={onRightClickCeil}
    />
  ));
}

function Ceil({ ceil, index, onClick, onRightClick }) {
  function _onClick() {
    onClick(index);
  }
  function _onRightClick(e) {
    e.preventDefault();
    onRightClick(index);
  }
  function ceilText() {
    const { state, minesAround } = ceil;
    if (state === 'open') {
      return minesAround >= 0 ? minesAround : 'x';
    }
    if (state === 'cover') return null;
    return state[0];
    // return minesAround;
  }
  return (
    <div
      className="mine__ceil"
      style={{ background: ceil.state === 'open' ? 'pink' : 'gray' }}
      onClick={_onClick}
      onContextMenu={_onRightClick}
    >
      {ceilText()}
    </div>
  );
}

const Div = styled.div`
  .mine__header {
    height: 30px;
    background-color: white;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(10, 40px);
    grid-template-rows: repeat(10, 40px);
    background-color: white;
    grid-gap: 2px;
  }
  .mine__ceil {
    line-height: 40px;
    text-align: center;
  }
`;

export default MineSweeperView;
