import React from 'react';
import styled from 'styled-components';

function Win10View({ className }) {
  return (
    <footer className={className}>
      <div className="footer__items left">
        <div className="footer__item" />
        <div className="footer__item" />
        <div className="footer__item" />
      </div>
      <div className="footer__items right">
        <div className="footer__item" />
        <div className="footer__item" />
      </div>
    </footer>
  );
}

export default styled(Win10View)`
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  & .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  & .right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .footer__items {
    display: flex;
  }
  .footer__item {
    height: 100%;
    width: 50px;
    background-color: blue;
  }
`;
