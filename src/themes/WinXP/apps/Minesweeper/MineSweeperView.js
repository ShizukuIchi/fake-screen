import React from 'react';
import styled from 'styled-components';
import dead from 'src/assets/dead.png';
import smile from 'src/assets/smile.png';
import win from 'src/assets/win.png';
import empty from 'src/assets/empty.png';
import open1 from 'src/assets/open1.png';
import open2 from 'src/assets/open2.png';
import open3 from 'src/assets/open3.png';
import open4 from 'src/assets/open4.png';
import open5 from 'src/assets/open5.png';
import open6 from 'src/assets/open6.png';
import open7 from 'src/assets/open7.png';
import open8 from 'src/assets/open8.png';
import flag from 'src/assets/flag.png';
import mine from 'src/assets/mine-ceil.png';
import mineDeath from 'src/assets/mine-death.png';
import misFlagged from 'src/assets/misflagged.png';
import question from 'src/assets/question.png';

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
    return (
      mines -
      ceils.filter(ceil => ceil.state === 'flag' || ceil.state === 'misflagged')
        .length
    );
  }
  function statusFace() {
    switch (status) {
      case 'died':
        return <img alt="dead" src={dead} />;
      case 'won':
        return <img alt="win" src={win} />;
      default:
        return <img alt="smile" src={smile} />;
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
          <div className="mine__face__outer">
            <button className="mine__face" onClick={() => onReset()}>
              {statusFace()}
            </button>
          </div>
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
function getTextImg(index) {
  return [empty, open1, open2, open3, open4, open5, open6, open7, open8][index];
}
function Ceils({ ceils, onLeftClickCeil, onRightClickCeil }) {
  function renderContent(ceil) {
    const { state, minesAround } = ceil;
    switch (state) {
      case 'open':
        return <MinesAround mines={minesAround} />;
      case 'unknown':
        return <Question />;
      case 'flag':
        return <Flag />;
      case 'misflagged':
        return <MisFlagged />;
      case 'mine':
        return <Mine />;
      case 'die':
        return <Die />;
      default:
        return <Cover />;
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
      {renderContent(ceil)}
    </Ceil>
  ));
}

const Die = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="death" src={mineDeath} />
  </>
);
const Cover = () => <CeilBackgroundCover />;
const MisFlagged = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="misFlagged" src={misFlagged} />
  </>
);
const Flag = () => (
  <>
    <CeilBackgroundCover />
    <img alt="flag" src={flag} />
  </>
);
const MinesAround = ({ mines }) => (
  <>
    <CeilBackgroundOpen />
    <img alt="mines-around" src={getTextImg(mines)} />
  </>
);
const Question = () => (
  <>
    <CeilBackgroundCover />
    <img alt="question" src={question} />
  </>
);
const Mine = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="mine" src={mine} />
  </>
);
function Ceil({ children, index, onLeftClick, onRightClick }) {
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
      onClick={_onLeftClick}
      onContextMenu={_onRightClick}
    >
      {children}
    </div>
  );
}

const CeilBackgroundCover = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(245, 245, 245) solid 2px;
  border-top: rgb(245, 245, 245) solid 2px;
  border-right: rgb(128, 128, 128) solid 2px;
  border-bottom: rgb(128, 128, 128) solid 2px;
`;
const CeilBackgroundOpen = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(128, 128, 128) solid 1px;
  border-top: rgb(128, 128, 128) solid 1px;
`;

export default styled(MineSweeperView)`
  .mine__top-bar {
    display: flex;
    height: 20px;
    padding: 5px;
    background-color: rgb(236, 233, 216);
  }
  .mine__top-bar__text {
    line-height: 100%;
    font-size: 11px;
    margin-right: 8px;
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 3px;
    background-color: rgb(192, 192, 192);
    padding: 5px;
  }
  .mine__score-bar {
    height: 34px;
    border-radius: 1px;
    border-top: rgb(128, 128, 128) solid 2px;
    border-left: rgb(128, 128, 128) solid 2px;
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
    text-align: right;
  }
  .mine__face__outer {
    width: 24px;
    height: 24px;
    border-top: 1px solid rgb(128, 128, 128);
    border-left: 1px solid rgb(128, 128, 128);
    border-radius: 2px;
  }
  .mine__face {
    border-radius: 2px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(192, 192, 192);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128)
      rgb(245, 245, 245);
    outline: none;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 16px);
    grid-template-rows: repeat(${({ rows }) => rows}, 16px);
    border-top: rgb(128, 128, 128) solid 3px;
    border-left: rgb(128, 128, 128) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
  }
  .mine__ceil {
    position: relative;
    img {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }
`;
