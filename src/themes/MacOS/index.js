import React from 'react';
import styled from 'styled-components';
import apple from 'src/assets/apple.svg';

const MacOS = ({ className }) => {
  return (
    <div className={className}>
      <div className="content">
        <img src={apple} alt="apple" className="logo" />
        <div className="progress">
          <div className="bar" />
        </div>
        <span className="hint">About an hour remaining</span>
      </div>
    </div>
  );
};

export default styled(MacOS)`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
  height: 100%;
  background: #000;
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
