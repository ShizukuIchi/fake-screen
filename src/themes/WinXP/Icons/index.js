import React from 'react';
import styled from 'styled-components';

function Icons({ icons, onMouseDown, onDoubleClick, displayFocus }) {
  return icons.map(icon => (
    <StyledIcon
      key={icon.component}
      {...icon}
      displayFocus={displayFocus}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    />
  ));
}

function Icon({
  title,
  component,
  onMouseDown,
  onDoubleClick,
  image,
  className,
  defaultSize,
  resizable,
  defaultOffset,
  multiInstance,
}) {
  function _onMouseDown() {
    onMouseDown(component);
  }
  function _onDoubleClick() {
    onDoubleClick({
      component,
      title,
      defaultOffset,
      defaultSize,
      resizable,
      multiInstance,
      image,
    });
  }
  return (
    <div
      className={className}
      onMouseDown={_onMouseDown}
      onDoubleClick={_onDoubleClick}
    >
      <img src={image} alt={title} className={`${className}__img`} />
      <div className={`${className}__text`}>{title}</div>
    </div>
  );
}

const StyledIcon = styled(Icon)`
  width: 60px;
  margin: 60px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  &__text {
    width: 100%;
    font-size: 10px;
    color: white;
    text-shadow: 0.5px 0.5px 1px black;
    text-align: center;
    background-color: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus ? '#005aff' : 'transparent'};
  }
  &__img {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 0;
  }
`;

export default Icons;
