import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <div className="footer__items left">
        <div className="footer__item" style={{ backgroundColor: 'green' }} />
      </div>
      <div className="footer__items right">
        <div
          className="footer__item"
          style={{ backgroundColor: 'lightblue' }}
        />
        <div
          className="footer__item"
          style={{ backgroundColor: 'lightblue' }}
        />
      </div>
    </Container>
  );
}

const Container = styled.footer`
  height: 40px;
  background: #1a3fd4;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  .footer__items.left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .footer__items.right {
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

export default Footer;
