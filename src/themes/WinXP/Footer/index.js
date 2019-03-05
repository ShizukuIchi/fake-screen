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
        <div className="footer__start__menu">
          <FooterMenu />
        </div>
        <img src={startButton} alt="start" className="footer__start" />
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
    #245edb 0%,
    #3f8cf3 9%,
    #2649d8 18%,
    #2354a6 92%,
    #21368c 100%
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
    box-shadow: inset 1px 1px #245edb, inset 0px -1px #245edb,
      inset 2px 4px 2px #45abe9, inset 0px -10px 10px #1e77c4;
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
    background-color: #fff;
  }
  .footer__window {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 150px;
    color: #fff;
    border-radius: 2px;
    margin-right: 1px;
    margin-top: 2px;
    padding-left: 8px;
    height: 22px;
    font-size: 11px;
    background-color: #296bd8;
    box-shadow: 0 0 1px rgb(0, 0, 0, 0.5),
      inset 1px 1px 1px rgb(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    /* border-top: 1px solid #2456b9; */
  }
  .footer__window.cover:hover {
    background-color: #3a7ff1;
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
    background-color: #0f3d97;
    box-shadow: inset 0 0 3px 1px rgb(0, 0, 0, 0.3);
  }
  .footer__window.focus:hover {
    background-color: #2456b9;
  }
  .footer__window.focus:hover:active {
    background-color: #0f3d97;
  }
  .footer__window.focus {
    background-color: #0f3d97;
    box-shadow: inset 0 0 3px 1px rgb(0, 0, 0, 0.3);
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
