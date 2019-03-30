import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

function Win10UpdateView({ progress, className }) {
  return (
    <div className={className}>
      <div className="content">
        <Spinner />
        <div className="messages">
          <div className="text">
            Working on updates <span id="progress">{progress}</span>% complete.
          </div>
          <div className="text">
            Don't turn off your PC. This will take a while.
          </div>
        </div>
      </div>
      <div className="text bottom">Your PC will restart several times</div>
    </div>
  );
}

export default styled(Win10UpdateView)`
  height: 100%;
  background: #0065cc;
  display: flex;
  cursor: none;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI light', Arial;
  word-break: break-word;
  padding: 10px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .messages {
    margin-top: 30px;
    text-align: center;
    & > * {
      margin-bottom: 5px;
    }
  }
  .text {
    font-size: 1.5em;
    color: #fff;
  }
  .bottom {
    text-align: center;
    position: absolute;
    bottom: 12%;
  }
`;
