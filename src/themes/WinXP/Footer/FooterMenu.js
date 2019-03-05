import React, { useState } from 'react';
import styled from 'styled-components';
import ie from 'src/assets/ie.ico';
import SubMenu from 'src/components/SubMenu';
import menuData from './FooterMenuData';

function FooterMenu({ className }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div className={className}>
      <header>
        <img src={ie} alt="avatar" />
        <span>User</span>
      </header>
      <section className="menu">
        <div className="menu__left">
          <div>
            <MenuLeftTop onMouseEnter={() => setHovering('')} />
          </div>
          <div className="menu__separator" />
          <MenuLeftMid onMouseEnter={() => setHovering('')} />
          <div className="menu__separator" />
          <div
            className="menu__item"
            onMouseOver={() => setHovering('AllPrograms')}
          >
            <img className="menu__item__img" src={ie} alt="" />
            <div className="menu__item__texts">
              <div className="menu__item__text ">
                All Programs
                {hovering === 'AllPrograms' && (
                  <span style={{ position: 'relative' }}>
                    <SubMenu data={menuData} />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="menu__right">
          <MenuRightTop onMouseEnter={() => setHovering('')} />
          <div className="menu__separator" />
          <MenuRightMid onMouseEnter={() => setHovering('')} />
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
const MenuLeftTop = props => (
  <div {...props}>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Internet</div>
        <div className="menu__item__text sub">Internet Explorer</div>
      </div>
    </div>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">E-mail</div>
        <div className="menu__item__text sub">Outlook Express</div>
      </div>
    </div>
  </div>
);
const MenuLeftMid = props => (
  <div {...props}>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Minesweeper</div>
      </div>
    </div>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Calculator</div>
      </div>
    </div>
  </div>
);
const MenuRightTop = props => (
  <div {...props}>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Minesweeper</div>
      </div>
    </div>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Calculator</div>
      </div>
    </div>
  </div>
);
const MenuRightMid = props => (
  <div {...props}>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Minesweeper</div>
      </div>
    </div>
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Calculator</div>
      </div>
    </div>
    <div className="menu__separator" />
    <div className="menu__item">
      <img className="menu__item__img" src={ie} alt="" />
      <div className="menu__item__texts">
        <div className="menu__item__text ">Calculator</div>
      </div>
    </div>
  </div>
);
export default styled(FooterMenu)`
  header {
    display: flex;
    align-items: center;
    background-color: blue;
    color: #fff;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: blue;
    color: #fff;
  }
  .footer__item {
    display: flex;
    align-items: center;
  }
  .footer__item__img {
    width: 30px;
    height: 30px;
  }
  .menu {
    display: flex;
  }
  .menu__right {
    background-color: skyblue;
    border-left: solid blue 1px;
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
    height: 2px;
    background-color: gray;
  }
  .menu__item {
    display: flex;
    align-items: center;
  }
  .menu__item__img {
    width: 30px;
    height: 30px;
  }
  .menu__item__texts {
    display: flex;
    flex-direction: column;
  }
  .menu__item__text {
    white-space: nowrap;
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
