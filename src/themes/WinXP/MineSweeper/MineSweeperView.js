import React from 'react';
import styled from 'styled-components';

function MineSweeperView({
  state,
  onChangeCeilState,
  onReset,
  onChangeDifficulty,
}) {
  return (
    <Div>
      <header className="mine__header" onClick={onReset} />
      <section className="mine__content">
        <div className="mine__content__inner">
          <Ceils ceils={state.ceils} onClick={onChangeCeilState} />
        </div>
      </section>
    </Div>
  );
}

function Ceils({ ceils, onClick }) {
  return ceils.map((ceil, index) => {
    return (
      <div
        className="mine__ceil"
        style={{ background: ceil.state === 'cover' ? 'gray' : 'pink' }}
        onClick={onClick.bind(null, index, 'open')}
        key={index}
      >
        {ceil.state === 'cover'
          ? ''
          : ceil.minesAround >= 0
          ? ceil.minesAround
          : 'x'}
      </div>
    );
  });
}

const Div = styled.div`
  .mine__header {
    height: 30px;
    background-color: red;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(10, 40px);
    grid-template-rows: repeat(10, 40px);
    background-color: white;
    grid-gap: 2px;
  }
`;

export default MineSweeperView;
