import React, { useState } from 'react';
import styled from 'styled-components';
import ie from 'src/assets/internetExplorer/ie.ico';
import mine from 'src/assets/minesweeper/mine-icon.png';
import setAccess from 'src/assets/windowsIcons/227(32x32).png';
import outlook from 'src/assets/windowsIcons/887(32x32).png';
import mediaPlayer from 'src/assets/windowsIcons/846(32x32).png';
import messenger from 'src/assets/windowsIcons/msn.png';
import tour from 'src/assets/windowsIcons/853(32x32).png';
import transfer from 'src/assets/windowsIcons/367(32x32).png';
import calculator from 'src/assets/windowsIcons/74(32x32).png';
import documents from 'src/assets/windowsIcons/308(32x32).png';
import recentDocuments from 'src/assets/windowsIcons/301(32x32).png';
import pictures from 'src/assets/windowsIcons/307(32x32).png';
import music from 'src/assets/windowsIcons/550(32x32).png';
import computer from 'src/assets/windowsIcons/676(32x32).png';
import controlPanel from 'src/assets/windowsIcons/300(32x32).png';
import connect from 'src/assets/windowsIcons/309(32x32).png';
import printer from 'src/assets/windowsIcons/549(32x32).png';
import help from 'src/assets/windowsIcons/747(32x32).png';
import search from 'src/assets/windowsIcons/299(32x32).png';
import run from 'src/assets/windowsIcons/743(32x32).png';
import lock from 'src/assets/windowsIcons/546(32x32).png';
import user from 'src/assets/windowsIcons/user.png';
import shut from 'src/assets/windowsIcons/310(32x32).png';
import allProgramsIcon from 'src/assets/windowsIcons/all-programs.ico';

import empty from 'src/assets/empty.png';

import SubMenu from 'src/components/SubMenu';

import { AllPrograms, ConnectTo, MyRecentDocuments } from './FooterMenuData';

function FooterMenu({ className }) {
  const [hovering, setHovering] = useState('');
  function onMouseOver(e) {
    const item = e.target.closest('.menu__item');
    if (!item) return;
    setHovering(item.querySelector('.menu__item__text').textContent);
  }
  return (
    <div className={className}>
      <header>
        <img className="header__img" src={user} alt="avatar" />
        <span className="header__text">User</span>
      </header>
      <section className="menu" onMouseOver={onMouseOver}>
        <hr className="orange-hr" />
        <div className="menu__left">
          <Item text="Internet" icon={ie}>
            <div className="menu__item__subtext">Internet Explorer</div>
          </Item>
          <Item text="E-mail" icon={outlook}>
            <div className="menu__item__subtext">Outlook Express</div>
          </Item>
          <div className="menu__separator" />
          <Items
            items={[
              { icon: mine, text: 'Minesweeper' },
              { icon: mediaPlayer, text: 'Windows Media Player' },
              { icon: messenger, text: 'Windows Messenger' },
              { icon: tour, text: 'Tour Windows XP' },
              { icon: transfer, text: 'Files and Settings Transfer Wizard' },
              { icon: calculator, text: 'Calculator' },
            ]}
          />
          <div style={{ flex: 1 }} />
          <div className="menu__separator" />
          <Item
            style={
              hovering === 'All Programs'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                    textShadow: '0.1px 0 white',
                    letterSpacing: '0.4px',
                  }
                : { textShadow: '0.1px 0 black' }
            }
            text={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                All Programs
                <img
                  src={allProgramsIcon}
                  alt=""
                  style={{
                    marginLeft: '5px',
                    height: '18px',
                  }}
                />
              </div>
            }
            icon={empty}
          >
            {hovering === 'All Programs' && <SubMenu data={AllPrograms} />}
          </Item>
        </div>
        <div className="menu__right">
          <Item text="My Documents" icon={documents} />
          <Item
            style={
              hovering === 'My Recent Documents'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                    textShadow: '0.1px 0 white',
                    letterSpacing: '0.4px',
                  }
                : { textShadow: '0.1px 0 #00136b', letterSpacing: '0.4px' }
            }
            text="My Recent Documents"
            icon={recentDocuments}
          >
            <div
              style={{
                borderLeftColor:
                  hovering === 'My Recent Documents' ? '#FFF' : '#00136b',
              }}
              className="menu__arrow"
            />
            {hovering === 'My Recent Documents' && (
              <SubMenu left="153px" data={MyRecentDocuments} />
            )}
          </Item>
          <Items
            items={[
              { icon: pictures, text: 'My Pictures' },
              { icon: music, text: 'My Music' },
              { icon: computer, text: 'My Computer' },
            ]}
          />
          <div className="menu__separator" />
          <Items
            items={[
              { icon: controlPanel, text: 'Control Panel' },
              { icon: setAccess, text: 'Set Program Access and Defaults' },
            ]}
          />
          <Item
            style={
              hovering === 'Connect To'
                ? {
                    backgroundColor: '#2f71cd',
                    color: '#FFF',
                  }
                : {}
            }
            text="Connect To"
            icon={connect}
          >
            <div
              style={{
                borderLeftColor: hovering === 'Connect To' ? '#FFF' : '#00136b',
              }}
              className="menu__arrow"
            />
            {hovering === 'Connect To' && (
              <SubMenu left="153px" data={ConnectTo} />
            )}
          </Item>
          <Item text="Printers and Faxes" icon={printer} />
          <div className="menu__separator" />
          <Items
            items={[
              { icon: help, text: 'Help and Support' },
              { icon: search, text: 'Search' },
              { icon: run, text: 'Run...' },
            ]}
          />
        </div>
      </section>
      <footer>
        <div className="footer__item">
          <img className="footer__item__img" src={lock} alt="" />
          <span>Log Off</span>
        </div>
        <div className="footer__item">
          <img className="footer__item__img" src={shut} alt="" />
          <span>Turn Off Computer</span>
        </div>
      </footer>
    </div>
  );
}
function Items({ items, ...rest }) {
  return items.map((item, i) => <Item key={i} {...item} {...rest} />);
}
function Item({
  style,
  text,
  icon,
  onHover = () => {},
  onClick = () => {},
  children,
}) {
  function _onClick() {
    onClick(text);
  }
  function onMouseEnter() {
    onHover(text);
  }
  return (
    <div
      className="menu__item"
      style={style}
      onClick={_onClick}
      onMouseEnter={onMouseEnter}
    >
      <img className="menu__item__img" src={icon} alt={text} />
      <div className="menu__item__texts">
        <div className="menu__item__text ">{text}</div>
        {children}
      </div>
    </div>
  );
}
export default styled(FooterMenu)`
  font-size: 11px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4282d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  letter-spacing: -0.2px;
  header {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: #fff;
    height: 54px;
    padding: 6px 5px 5px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(
      to bottom,
      #1868ce 0%,
      #0e60cb 12%,
      #0e60cb 20%,
      #1164cf 32%,
      #1667cf 33%,
      #1b6cd3 47%,
      #1e70d9 54%,
      #2476dc 60%,
      #297ae0 65%,
      #3482e3 77%,
      #3786e5 79%,
      #428ee9 90%,
      #4791eb 100%
    );
    overflow: hidden;
  }
  header:before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      transparent 0,
      rgb(255, 255, 255, 0.3) 1%,
      rgb(255, 255, 255, 0.5) 2%,
      rgb(255, 255, 255, 0.5) 95%,
      rgb(255, 255, 255, 0.3) 98%,
      rgb(255, 255, 255, 0.2) 99%,
      transparent 100%
    );
    box-shadow: inset 0 -1px 1px #0e60cb;
  }
  .header__img {
    width: 42px;
    height: 42px;
    margin-right: 5px;
    border-radius: 3px;
    border: 2px solid rgb(222, 222, 222, 0.8);
  }
  .header__text {
    font-size: 14px;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
  }
  footer {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    height: 32px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      #4282d6 0%,
      #3b85e0 3%,
      #418ae3 5%,
      #418ae3 17%,
      #3c87e2 21%,
      #3786e4 26%,
      #3482e3 29%,
      #2e7ee1 39%,
      #2374df 49%,
      #2072db 57%,
      #196edb 62%,
      #176bd8 72%,
      #1468d5 75%,
      #1165d2 83%,
      #0f61cb 88%
    );
  }

  .footer__item {
    display: flex;
    margin-right: 10px;
    align-items: center;
  }
  .footer__item__img {
    border-radius: 3px;
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
  .menu {
    display: flex;
    margin: 0 2px;
    position: relative;
    border-top: 1px solid #385de7;
    box-shadow: 0 1px #385de7;
  }
  .orange-hr {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #da884a 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 0;
  }
  .menu__right {
    background-color: #cbe3ff;
    border-left: solid #3a3aff5e 1px;
    padding: 6px 5px 5px;
    width: 190px;
    color: #00136b;
  }
  .menu__left {
    background-color: #fff;
    padding: 6px 5px 0;
    width: 190px;
    display: flex;
    flex-direction: column;
  }
  .sub_menu {
    border: 1px solid black;
    position: absolute;
    left: 100%;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .menu__separator {
    height: 7.5px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    background-clip: content-box;
  }
  .menu__right .menu__separator {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #87b3e2b5 50%,
      rgba(0, 0, 0, 0) 100%
    );
    background-clip: content-box;
  }
  .menu__item {
    padding: 1px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .menu__left .menu__item {
    height: 34px;
  }
  .menu__right .menu__item {
    height: 26px;
    margin-bottom: 4px;
    line-height: 13px;
  }
  .menu__item:hover {
    color: white;
    background-color: #2f71cd;
  }
  .menu__item:hover .menu__item__subtext {
    color: white;
  }
  .menu__item__texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
  }
  .menu__right .menu__item__img {
    margin-right: 3px;
    width: 22px;
    height: 22px;
  }
  .menu__left .menu__item__img {
    margin-right: 3px;
    width: 30px;
    height: 30px;
  }
  .menu__right .menu__item:nth-child(-n + 5):not(:nth-child(2)),
  .menu__left .menu__item:nth-child(-n + 2) {
    &:hover .menu__item__text {
      text-shadow: 0.1px 0 white;
    }
    .menu__item__text {
      text-shadow: 0.1px 0 #00136b;
      letter-spacing: 0.4px;
    }
  }
  .menu__left .menu__item:last-child {
    &:hover .menu__item__text {
      text-shadow: 0.1px 0 white;
    }
    .menu__item__text {
      letter-spacing: 0.4px;
    }
  }
  .menu__item__subtext {
    color: rgba(0, 0, 0, 0.4);
    line-height: 12px;
    margin-bottom: 1px;
    text-shadow: none;
  }
  .menu__left .menu__item:last-child {
    height: 24px;
  }
  .menu__item:hover .menu__arrow {
    border-left-color: #fff;
  }
  .menu__arrow {
    border: 3.5px solid transparent;
    border-right: 0;
    border-left-color: #00136b;
    position: absolute;
    left: 146px;
  }
`;