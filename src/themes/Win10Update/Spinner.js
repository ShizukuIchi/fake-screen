import React from 'react';
import styled from 'styled-components';

function Spinner({ className }) {
  return (
    <div className={className}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
}

export default styled(Spinner)`
  width: 50px;
  height: 50px;
  position: relative;
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
