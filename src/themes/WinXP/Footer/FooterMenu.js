import React, { useState } from 'react';
import styled from 'styled-components';
import ie from 'src/assets/ie.ico';
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
        <img className="header__img" src={ie} alt="avatar" />
        <span className="header__text">User</span>
      </header>
      <section className="menu" onMouseOver={onMouseOver}>
        <hr className="orange-hr" />
        <div className="menu__left">
          <Item text="Internet" icon={ie}>
            <div className="menu__item__subtext">Internet Explorer</div>
          </Item>
          <Item text="E-mail" icon={ie}>
            <div className="menu__item__subtext">Outlook Express</div>
          </Item>
          <div className="menu__separator" />
          <Items
            items={[
              { icon: ie, text: 'Minesweeper' },
              { icon: ie, text: 'Windows Media Player' },
              { icon: ie, text: 'Windows Messenger' },
              { icon: ie, text: 'Tour Windows XP' },
              { icon: ie, text: 'Files and Settings Transfer Wizard' },
              { icon: ie, text: 'Calculator' },
            ]}
          />
          <div style={{ flex: 1 }} />
          <div className="menu__separator" />
          <Item text="All Programs" icon={empty}>
            {hovering === 'All Programs' && (
              <span style={{ position: 'relative' }}>
                <SubMenu data={AllPrograms} />
              </span>
            )}
          </Item>
        </div>
        <div className="menu__right">
          <Item text="My Documents" icon={ie} />
          <Item text="My Recent Documents" icon={ie}>
            {hovering === 'My Recent Documents' && (
              <span style={{ position: 'relative' }}>
                <SubMenu data={MyRecentDocuments} />
              </span>
            )}
          </Item>
          <Items
            items={[
              { icon: ie, text: 'My Pictures' },
              { icon: ie, text: 'My Music' },
              { icon: ie, text: 'My Computer' },
            ]}
          />
          <div className="menu__separator" />
          <Items
            items={[
              { icon: ie, text: 'Control Panel' },
              { icon: ie, text: 'Set Program Access and Defaults' },
            ]}
          />
          <Item text="Connect To" icon={ie}>
            {hovering === 'Connect To' && (
              <span style={{ position: 'relative' }}>
                <SubMenu data={ConnectTo} />
              </span>
            )}
          </Item>
          <Item text="Printers and Faxes" icon={ie} />
          <div className="menu__separator" />
          <Items
            items={[
              { icon: ie, text: 'Help and Support' },
              { icon: ie, text: 'Search' },
              { icon: ie, text: 'Run...' },
            ]}
          />
        </div>
      </section>
      <footer>
        <div className="footer__item">
          <img className="footer__item__img" src={ie} alt="" />
          <span>Log Off</span>
        </div>
        <div className="footer__item">
          <img className="footer__item__img" src={ie} alt="" />
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
  background-color: #1069ff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  letter-spacing: -0.2px;
  header {
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: #fff;
    height: 50px;
    padding: 5px;
  }
  .header__img {
    width: 40px;
    height: 40px;
    margin-right: 3px;
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
  }

  .footer__item {
    display: flex;
    margin-right: 10px;
    align-items: center;
  }
  .footer__item__img {
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
  .menu {
    display: flex;
    margin: 0 1px;
    position: relative;
    border-top: 1px solid #0e0eff;
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
    background-color: #b5d7ff;
    border-left: solid #3a3aff5e 1px;
    padding: 6px 5px 5px;
    width: 190px;
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
    margin-bottom: 5px;
  }
  .menu__right .menu__item {
    margin-bottom: 4px;
  }
  .menu__item:hover {
    color: white;
    background-color: #2f71cd;
  }
  .menu__item:hover .menu__item__subtext {
    color: white;
  }
  .menu__right .menu__item__img {
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
  .menu__left .menu__item__img {
    margin-right: 3px;
    width: 30px;
    height: 30px;
  }
  .menu__item__texts {
    display: flex;
    flex-direction: column;
  }
  .menu__right .menu__item:nth-child(-n + 5),
  .menu__left .menu__item:nth-child(-n + 2),
  .menu__left .menu__item:last-child {
    &:hover .menu__item__text {
      text-shadow: 0.1px 0 white;
    }
    .menu__item__text {
      text-shadow: 0.1px 0 black;
      letter-spacing: 0.4px;
    }
  }
  .menu__item__subtext {
    color: rgba(0, 0, 0, 0.4);
    line-height: 12px;
    margin-bottom: 1px;
  }
  .menu__arrow {
    padding: 10px;
    width: 5px;
    height: 5px;
    background-color: #000;
    position: relative;
    margin-right: 10px;
  }
`;
