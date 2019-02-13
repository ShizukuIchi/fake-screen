import React from 'react';
import styled from 'styled-components';
import startButton from './start_button.png';
function Footer() {
  return (
    <Container>
      <div className="footer__items left">
        <img src={startButton} alt="" className="footer__item" />
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
  height: 30px;
  background: linear-gradient(
    to bottom,
    #0058ee 0%,
    #3f87ff 3%,
    #2b80ff 7%,
    #0352ff 10%,
    #0345f1 14%,
    #003ce9 17%,
    #0634e3 24%,
    #0635e5 48%,
    #063af5 66%,
    #164afe 100%
  );
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
  }
`;

export default Footer;
