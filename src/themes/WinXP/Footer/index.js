import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FooterMenu from './FooterMenu';
import startButton from 'src/assets/start.png';

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = 'AM';
  let min = date.getMinutes();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = 'PM';
  }
  if (min < 10) {
    min = '0' + min;
  }
  return `${hour}:${min} ${hourPostFix}`;
};

function Footer({ onClickApp, apps, focusedAppId }) {
  const [time, setTime] = useState(getTime);
  const [menuOn, setMenuOn] = useState(false);
  function toggleMenu() {
    setMenuOn(on => !on);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <div className="footer__items left">
        <div className="footer__start__menu">{menuOn && <FooterMenu />}</div>
        <img
          src={startButton}
          alt="start"
          className="footer__start"
          onMouseDown={toggleMenu}
        />
        {[...apps]
          .sort((a, b) => a.id - b.id)
          .map(app => (
            <FooterWindow
              key={app.id}
              id={app.id}
              icon={app.headerIcon}
              title={app.title}
              onClick={onClickApp}
              isFocus={focusedAppId === app.id}
            />
          ))}
      </div>

      <div className="footer__items right">
        <div className="footer__time">{time}</div>
      </div>
    </Container>
  );
}

function FooterWindow({ id, icon, title, onClick, isFocus }) {
  function _onClick() {
    onClick(id);
  }
  return (
    <div
      onClick={_onClick}
      className={`footer__window ${isFocus ? 'focus' : 'cover'}`}
    >
      <img className="footer__window__icon" src={icon} alt={title} />
      {title}
    </div>
  );
}

const Container = styled.footer`
  height: 30px;
  background: linear-gradient(
    to bottom,
    #1f2f86 0,
    #3165c4 3%,
    #3682e5 6%,
    #4490e6 10%,
    #3883e5 12%,
    #2b71e0 15%,
    #2663da 18%,
    #235bd6 20%,
    #2258d5 23%,
    #2157d6 38%,
    #245ddb 54%,
    #2562df 86%,
    #245fdc 89%,
    #2158d4 92%,
    #1d4ec0 95%,
    #1941a5 98%
  );
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  .footer__items.left {
    height: 100%;
    flex: 1;
  }
  .footer__items.right {
    background-color: #0b77e9;
    flex-shrink: 0;
    background: linear-gradient(
      to bottom,
      #0c59b9 1%,
      #139ee9 6%,
      #18b5f2 10%,
      #139beb 14%,
      #1290e8 19%,
      #0d8dea 63%,
      #0d9ff1 81%,
      #0f9eed 88%,
      #119be9 91%,
      #1392e2 94%,
      #137ed7 97%,
      #095bc9 100%
    );
    border-left: 1px solid #1042af;
    box-shadow: inset 1px 0 1px #18bbff;
  }
  .footer__items {
    display: flex;
    align-items: center;
  }
  .footer__start {
    height: 100%;
    margin-right: 10px;
    &:hover {
      filter: brightness(105%);
    }
  }
  .footer__start__menu {
    position: absolute;
    left: 0;
    bottom: 100%;
  }
  .footer__window {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 150px;
    color: #fff;
    border-radius: 2px;
    margin-top: 2px;
    padding-left: 8px;
    height: 23px;
    font-size: 11px;
    background-color: #3c81f3;
    box-shadow: inset -1px 0px rgb(0, 0, 0, 0.3),
      inset 1px 1px 1px rgb(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .footer__window.cover:hover {
    background-color: #53a3ff;
    box-shadow: 1px 0px 1px rgb(0, 0, 0, 0.2),
      inset 1px 1px 1px rgb(255, 255, 255, 0.3);
  }
  .footer__window.cover:before {
    display: block;
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 10px;
    height: 1px;
    border-bottom-right-radius: 50%;
    box-shadow: 2px 2px 3px rgb(255, 255, 255, 0.5);
  }
  .footer__window.cover:hover:active {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgb(0, 0, 0, 0.3),
      inset 1px 0 1px rgb(0, 0, 0, 0.7);
  }
  .footer__window.focus:hover {
    background-color: #3576f3;
  }
  .footer__window.focus:hover:active {
    background-color: #1e52b7;
  }
  .footer__window.focus {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgb(0, 0, 0, 0.2),
      inset 1px 0 1px rgb(0, 0, 0, 0.7);
  }
  .footer__window__icon {
    height: 15px;
    width: 15px;
    margin-right: 4px;
  }
  .footer__time {
    margin: 0 15px 0 20px;
    color: #fff;
    font-size: 11px;
  }
`;

export default Footer;
