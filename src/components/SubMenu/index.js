import React, { useState } from 'react';
import styled from 'styled-components';

function SubMenu({ className, data, style }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div style={{ ...style }} className={className}>
      {data.map((item, index) => (
        <SubMenuItem
          onHover={setHoverIndex}
          key={index}
          hover={hoverIndex === index}
          item={item}
          index={index}
          className={className}
        />
      ))}
    </div>
  );
}

const SubMenuItem = ({ index, item, className, hover, onHover }) => {
  function _onMouseOver() {
    onHover(index);
  }
  switch (item.type) {
    case 'item':
      return (
        <div onMouseEnter={_onMouseOver} className={`${className}-item`}>
          <img className={`${className}-img`} src={item.icon} alt="" />
          <div className={`${className}-text`}>{item.text}</div>
        </div>
      );
    case 'separator':
      return <div className={`${className}-separator`} />;
    case 'menu':
      return (
        <div
          onMouseEnter={_onMouseOver}
          className={`${className}-item ${hover ? 'hover' : ''}`}
        >
          <img className={`${className}-img`} src={item.icon} alt="" />
          <div className={`${className}-text`}>{item.text}</div>
          <div className={`${className}-arrow`}>
            {hover && <StyledSubMenu data={item.items} />}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const StyledSubMenu = styled(SubMenu)`
  position: absolute;
  left: 100%;
  bottom: 0;
  background-color: white;
  border: 1px black solid;
  &-separator {
    height: 2px;
    background-color: gray;
  }
  &-item {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: inset 2px 0 skyblue;
    position: relative;
    color: black;
    background-color: white;
  }
  &-item.hover {
    background-color: blue;
    color: white;
  }
  &-item:hover {
    background-color: blue;
    color: white;
  }
  &-img {
    width: 20px;
    height: 20px;
  }
  &-text {
    font-size: 11px;
    white-space: nowrap;
  }
  &-arrow {
    position: absolute;
    right: 0;
    height: 100%;
    width: 10px;
    background-color: black;
  }
`;

export default StyledSubMenu;
