import React from 'react';
import styled from 'styled-components';

function Win10UpdateView({ progress, className }) {
  return (
    <div className={className}>
      <div className="content">
        <div className="loader">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="message">
          Working on updates <span id="progress">{progress}</span>% complete.
        </div>
        <div className="message">
          Don't turn off your PC. This will take a while.
        </div>
      </div>
      <div className="message bottom">Your PC will restart several times</div>
    </div>
  );
}

export default styled(Win10UpdateView)`
  height: 100%;
  background: #0065cc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI light', Arial;
  word-break: break-word;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 5px;
    }
  }
  .message {
    font-size: 1.5em;
    color: #fff;
  }
  .bottom {
    text-align: center;
    position: absolute;
    bottom: 12%;
  }

  .loader {
    margin: 40px 0 15px 0;
    width: 50px;
    height: 50px;
    position: relative;
  }
  .dot {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: spin 6s infinite;
    animation-timing-function: linear;
    opacity: 0;
    &::before {
      border-radius: 50%;
      content: '';
      margin: auto;
      display: block;
      width: 5.5px;
      height: 5.5px;
      background: white;
    }
  }
  .dot:nth-child(2) {
    animation-delay: 240ms;
  }
  .dot:nth-child(3) {
    animation-delay: 480ms;
  }
  .dot:nth-child(4) {
    animation-delay: 720ms;
  }
  .dot:nth-child(5) {
    animation-delay: 960ms;
  }

  @keyframes spin {
    0% {
      transform: rotate(-100deg);
      opacity: 20;
    }
    4% {
      transform: rotate(-10deg);
      opacity: 100;
    }
    27% {
      transform: rotate(110deg);
      opacity: 100;
    }
    33% {
      transform: rotate(350deg);
      opacity: 100;
    }
    56% {
      transform: rotate(460deg);
      opacity: 100;
    }
    61% {
      transform: rotate(630deg);
      opacity: 0;
    }
  }
`;
