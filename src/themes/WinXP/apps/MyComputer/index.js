import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import go from 'src/assets/internetExplorer/290.png';
import search from 'src/assets/internetExplorer/299(32x32).png';
import computer from 'src/assets/windowsIcons/676(16x16).png';
import back from 'src/assets/internetExplorer/back.png';
import forward from 'src/assets/internetExplorer/forward.png';
import up from 'src/assets/windowsIcons/up.png';
import viewInfo from 'src/assets/windowsIcons/view-info.ico';
import remove from 'src/assets/windowsIcons/302(16x16).png';
import control from 'src/assets/windowsIcons/300(16x16).png';
import network from 'src/assets/windowsIcons/693(16x16).png';
import document from 'src/assets/windowsIcons/308(16x16).png';
import folderSmall from 'src/assets/windowsIcons/318(16x16).png';
import menu from 'src/assets/windowsIcons/358(32x32).png';
import folder from 'src/assets/windowsIcons/318(32x32).png';
import folderOpen from 'src/assets/windowsIcons/337(32x32).png';
import disk from 'src/assets/windowsIcons/334(32x32).png';
import cd from 'src/assets/windowsIcons/111(32x32).png';

import DropDown from './Dropdown';
import dropDownData from './dropDownData';
function MyComputer({ onClose }) {
  const dropDown = useRef(null);
  const [openOption, setOpenOption] = useState('');
  function hoverOption(option) {
    if (openOption) setOpenOption(option);
  }
  function onMouseUp(e) {
    if (!dropDown.current.contains(e.target)) setOpenOption('');
  }
  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      default:
    }
    setOpenOption('');
  }
  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  return (
    <Div>
      <section className="com__toolbar">
        <div className="com__toolbar__drop-downs" ref={dropDown}>
          {'File,Edit,View,Favorites,Tools,Help'.split(',').map(name => (
            <div
              className={`com__toolbar__drop-down${
                openOption === name ? '--active' : ''
              }`}
              key={name}
            >
              <div className="com__toolbar__drop-down__label">{name}</div>
              {openOption === name && (
                <DropDown
                  onClick={onClickOptionItem}
                  items={dropDownData[name]}
                  position={{ top: '20px', left: '0' }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="com__toolbar__options">
          {'File,Edit,View,Favorites,Tools,Help'.split(',').map(name => (
            <div
              key={name}
              onMouseDown={() => {
                setOpenOption(name);
              }}
              onMouseEnter={() => hoverOption(name)}
              className="com__toolbar__option"
            >
              {name}
            </div>
          ))}
        </div>
      </section>
      <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
          <img className="com__function_bar__icon" src={back} alt="" />
          <span className="com__function_bar__text">Back</span>
          <div className="com__function_bar__arrow" />
        </div>
        <div className="com__function_bar__button--disable">
          <img className="com__function_bar__icon" src={forward} alt="" />
          <div className="com__function_bar__arrow" />
        </div>
        <div className="com__function_bar__button">
          <img className="com__function_bar__icon--normalize" src={up} alt="" />
        </div>
        <div className="com__function_bar__separate" />
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--normalize "
            src={search}
            alt=""
          />
          <span className="com__function_bar__text">Search</span>
        </div>
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--normalize"
            src={folderOpen}
            alt=""
          />
          <span className="com__function_bar__text">Folders</span>
        </div>
        <div className="com__function_bar__separate" />
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--margin12"
            src={menu}
            alt=""
          />
          <div className="com__function_bar__arrow" />
        </div>
      </section>
      <section className="com__address_bar">
        <div className="com__address_bar__title">Address</div>
        <div className="com__address_bar__content">
          <img
            src={computer}
            alt="ie"
            className="com__address_bar__content__img"
          />
          <div className="com__address_bar__content__text">My Computer</div>
        </div>
        <div className="com__address_bar__go">
          <img className="com__address_bar__go__img" src={go} alt="go" />
          <span className="com__address_bar__go__text">Go</span>
        </div>
      </section>
      <div className="com__content">
        <div className="com__content__inner">
          <div className="com__content__left">
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">
                System Tasks
              </div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={viewInfo}
                    alt="view"
                  />
                  <div className="com__content__left__card__text">
                    View system information
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={remove}
                    alt="remove"
                  />
                  <div className="com__content__left__card__text">
                    Add or remove programs
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={control}
                    alt="control"
                  />
                  <div className="com__content__left__card__text">
                    Change a setting
                  </div>
                </div>
              </div>
            </div>
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">
                Other Places
              </div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={network}
                    alt="network"
                  />
                  <div className="com__content__left__card__text">
                    My Network Places
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={document}
                    alt="document"
                  />
                  <div className="com__content__left__card__text">
                    My Documents
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={folderSmall}
                    alt="folder"
                  />
                  <div className="com__content__left__card__text">
                    Shared Documents
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={control}
                    alt="control"
                  />
                  <div className="com__content__left__card__text">
                    Control Panel
                  </div>
                </div>
              </div>
            </div>
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">Details</div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__row">
                  <div className="com__content__left__card__text">
                    My Computer
                  </div>
                  <div className="com__content__left__card__text">
                    System Folder
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="com__content__right">
            <div className="com__content__right__card">
              <div className="com__content__right__card__header">
                Files Stored on This Computer
              </div>
              <div className="com__content__right__card__content">
                <div className="com__content__right__card__item">
                  <img
                    src={folder}
                    alt="folder"
                    className="com__content__right__card__img"
                  />
                  <div className="com__content__right__card__text">
                    Shared Documents
                  </div>
                </div>
                <div className="com__content__right__card__item">
                  <img
                    src={folder}
                    alt="folder"
                    className="com__content__right__card__img"
                  />
                  <div className="com__content__right__card__text">
                    User's Documents
                  </div>
                </div>
              </div>
            </div>
            <div className="com__content__right__card">
              <div className="com__content__right__card__header">
                Hard Disk Drives
              </div>
              <div className="com__content__right__card__content">
                <div className="com__content__right__card__item">
                  <img
                    src={disk}
                    alt="disk"
                    className="com__content__right__card__img"
                  />
                  <div className="com__content__right__card__text">
                    Local Disk (C:)
                  </div>
                </div>
              </div>
            </div>
            <div className="com__content__right__card">
              <div className="com__content__right__card__header">
                Devices with Removable Storage
              </div>
              <div className="com__content__right__card__content">
                <div className="com__content__right__card__item">
                  <img
                    src={cd}
                    alt="cd"
                    className="com__content__right__card__img"
                  />
                  <div className="com__content__right__card__text">
                    CD Drive (D:)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  .com__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .com__toolbar__drop-downs {
    display: flex;
    height: 100%;
    position: absolute;
    border-bottom: 1px solid transparent;
  }
  .com__toolbar__drop-down {
    font-size: 11px;
    line-height: 20px;
    height: 100%;
    background-color: #1660e8;
    position: relative;
    visibility: hidden;
  }
  .com__toolbar__drop-down--active {
    font-size: 11px;
    line-height: 20px;
    height: 100%;
    visibility: visible;
    z-index: 1;
    background-color: #1660e8;
    position: relative;
  }
  .com__toolbar__drop-down__label {
    padding: 0 7px;
    color: #fff;
  }
  .com__toolbar__options {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
  }
  .com__toolbar__option {
    font-size: 11px;
    line-height: 20px;
    height: 100%;
    padding: 0 7px;
    &:hover {
      background-color: #1660e8;
      color: #fff;
    }
  }
  .com__toolbar__img {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .com__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
  .com__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .com__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .com__function_bar__text {
    margin-right: 4px;
  }
  .com__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .com__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .com__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .com__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .com__address_bar {
    flex-shrink: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .com__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .com__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    font-size: 10;
    align-items: center;
    background-color: white;
    padding-left: 1px;
    &__img {
      width: 14px;
      height: 14px;
      margin-right: 2px;
    }
    &__text {
      line-height: 100%;
    }
  }
  .com__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .com__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .com__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .com__content {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-top-width: 0;
    background-color: #f1f1f1;
    overflow: auto;
    font-size: 11px;
    position: relative;
  }
  .com__content__inner {
    display: flex;
    height: 100%;
    overflow: auto;
  }
  .com__content__left {
    width: 160px;
    height: 100%;
    background-color: blue;
    overflow: auto;
    padding: 12px;
  }

  .com__content__left__card {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .com__content__left__card:not(:last-child) {
    margin-bottom: 12px;
  }
  .com__content__left__card__header {
    padding: 5px 0 5px 10px;
    font-weight: 700;
    background: linear-gradient(to right, #fff 0, lightblue 100%);
  }
  .com__content__left__card__content {
    padding: 5px 0 5px 10px;
    font-weight: 700;
    background-color: skyblue;
  }
  .com__content__left__card__row {
    display: flex;
  }
  .com__content__left__card__img {
    width: 14px;
    height: 14px;
  }
  .com__content__right {
    height: 100%;
    overflow: auto;
    background-color: #fff;
    flex: 1;
  }
  .com__content__right__card__header {
    width: 300px;
    font-weight: 700;
    padding: 2px 0 5px 12px;
    position: relative;
    &:after {
      content: '';
      display: block;
      background-color: blue;
      position: absolute;
      bottom: 0;
      left: -12px;
      height: 2px;
      width: 100%;
    }
  }
  .com__content__right__card__content {
    display: flex;
    align-items: center;
    padding: 15px;
    padding-right: 0;
  }
  .com__content__right__card__item {
    display: flex;
    align-items: center;
    height: 100%;
    width: 200px;
  }
  .com__content__right__card__img {
  }
  .com__content__right__card__text {
  }
`;

export default MyComputer;
