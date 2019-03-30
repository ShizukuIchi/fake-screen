import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import apple from './apple.svg';

export const initState = {
  value: 0,
  hint: 'About an hour remaining',
};
export const progressReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'NEXT':
      const nextValue = state.value + 0.4;
      return {
        value: nextValue,
        hint: getText(nextValue),
      };
    case 'CLEAR':
      return initState;
    default:
      return state;
  }
};

const MacOS = ({ className, initState }) => {
  const [progress, dispatch] = useReducer(progressReducer, initState);
  function next() {
    dispatch({ type: 'NEXT' });
  }
  const clear = () => dispatch({ type: 'CLEAR' });
  useEffect(() => {
    let timer;
    if (progress.value <= 100) {
      timer = setTimeout(next, Math.random() * 4000 + 400);
    } else {
      timer = setTimeout(clear, 10000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={className}>
      <div className="content">
        <img src={apple} alt="apple" className="logo" />
        <div className="progress">
          <div className="bar" style={{ width: `${progress.value}%` }} />
        </div>
        <span className="hint">{progress.hint}</span>
      </div>
    </div>
  );
};

export function getText(value) {
  switch (true) {
    case value < 3:
      return 'About an hour remaining';
    case value <= 5.2:
      return 'Installation is in progress. Calculating time remaining...';
    case value <= 6:
      return 'About an hour remaining';
    default:
      let remainMin = Math.ceil(((100 - value) * 2.5 * 2.4) / 60);
      return `About ${remainMin} minutes remaining`;
  }
}

MacOS.defaultProps = {
  initState,
};

export default styled(MacOS)`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
  height: 100%;
  background: #000;
  cursor: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: roboto;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    height: 150px;
    width: 150px;
    margin: 120px 0 180px 0;
  }
  .hint {
    font-weight: 700;
    font-size: 1.1em;
    color: white;
  }
  .progress {
    border: 1px solid rgba(240, 240, 240, 0.1);
    border-radius: 5px;
    height: 8px;
    width: 360px;
    margin-bottom: 30px;
    background: rgb(30, 30, 30);
    position: relative;
    overflow: hidden;
  }
  .bar {
    position: absolute;
    width: 0;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: rgba(240, 240, 240, 0.9);
  }
`;
