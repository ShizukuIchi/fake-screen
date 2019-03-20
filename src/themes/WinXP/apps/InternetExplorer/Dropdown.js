import React, { useState } from 'react';
import styled from 'styled-components';

export function DropDown({ items, position = {}, onClick }) {
  const [option, setOption] = useState('');
  function onMouseEnter(o) {
    setOption(o);
  }
  function _onClick(o) {
    onClick(o);
  }
  return (
    <Div {...position}>
      <div className="ie__drop-down__menu">
        {items.map((item, index) => {
          switch (item.type) {
            case 'item':
              return (
                <div
                  key={item.text}
                  className={`ie__drop-down__row${
                    item.disable ? '--disable' : ''
                  }`}
                  onMouseEnter={() => onMouseEnter(item.text)}
                  onClick={() => _onClick(item.text)}
                >
                  <div className="ie__drop-down__check" />
                  <div className="ie__drop-down__text">{item.text}</div>
                  <span className="ie__drop-down__hot-key">
                    {item.hotkey || ''}
                  </span>
                  <div className="ie__drop-down__arrow--disable" />
                </div>
              );
            case 'menu':
              return (
                <div
                  key={item.text}
                  className={`ie__drop-down__row${
                    option === item.text ? '--active' : ''
                  }`}
                  onMouseEnter={() => onMouseEnter(item.text)}
                >
                  <div className="ie__drop-down__check" />
                  <div className="ie__drop-down__text">{item.text}</div>
                  <span className="ie__drop-down__hot-key">
                    {item.hotkey || ''}
                  </span>
                  <div className="ie__drop-down__arrow" />
                  <div style={{ position: 'relative' }}>
                    {option === item.text && (
                      <DropDown position={item.position} items={item.items} />
                    )}
                  </div>
                </div>
              );
            case 'separator':
              return <div key={index} className="ie__drop-down__separator" />;
            default:
              return null;
          }
        })}
      </div>
    </Div>
  );
}

const Div = styled.div`
  left: ${({ left }) => (left ? left : 'initial')};
  top: ${({ top }) => (top ? top : 'initial')};
  right: ${({ right }) => (right ? right : 'initial')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'initial')};
  position: absolute;
  display: flex;
  font-size: 11px;
  border-bottom: 1px solid transparent;
  .ie__drop-down__row {
    position: relative;
    display: contents;
    &:hover > *:not(:nth-child(5)) {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .ie__drop-down__row--active {
    position: relative;
    display: contents;
    & > *:not(:nth-child(5)) {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .ie__drop-down__row--disable {
    display: contents;
    color: #8c8c8cb5;
    &:hover > * {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .ie__drop-down__title {
    padding: 0 7px;
    height: 100%;
    line-height: 20px;
    color: white;
    background-color: #1660e8;
  }
  .ie__drop-down__menu {
    background-color: #fff;
    z-index: 1;
    padding: 2px;
    line-height: 18px;
    display: grid;
    background-color: #fff;
    position: absolute;
    box-shadow: 2px 2px 1px rgb(100, 100, 100);
    border: 1px solid gray;
    grid-template-columns: 16px auto auto 15px 0px;
  }
  .ie__drop-down__separator {
    grid-column: 1 / 5;
    height: 7px;
    padding: 3px 1px;
    background-color: rgba(0, 0, 0, 0.2);
    background-clip: content-box;
  }
  .ie__drop-down__check {
    grid-column: 1;
  }
  .ie__drop-down__text {
    white-space: nowrap;
    padding-right: 8px;
    grid-column: 2;
  }
  .ie__drop-down__hot-key {
    white-space: nowrap;
    grid-column: 3;
    padding-right: 2px;
  }
  .ie__drop-down__arrow {
    position: relative;
    grid-column: 4;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 3px 0 3px 3px;
      border-color: transparent transparent transparent #000;
      content: '';
      display: block;
    }
  }
  .ie__drop-down__arrow--disable {
    grid-column: 4;
    width: 100%;
    height: 100%;
  }
`;
export default DropDown;
