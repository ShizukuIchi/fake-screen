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
  icon,
  headerIcon,
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
      headerIcon,
    });
  }
  return (
    <div
      className={className}
      onMouseDown={_onMouseDown}
      onDoubleClick={_onDoubleClick}
    >
      <div className={`${className}__img__container`}>
        <img src={icon} alt={title} className={`${className}__img`} />
      </div>
      <div className={`${className}__text__container`}>
        <div className={`${className}__text`}>{title}</div>
      </div>
    </div>
  );
}

const StyledIcon = styled(Icon)`
  width: 70px;
  margin-top: 60px;
  margin-left: 60px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  &__text__container {
    width: 100%;
    font-size: 10px;
    color: white;
    text-shadow: 0 1px 1px black;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    &:before {
      content: '';
      width: 50%;
    }
    &:after {
      content: '';
      width: 50%;
    }
  }
  &__text {
    padding: 0 3px 2px;
    background-color: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus ? '#0b61ff' : 'transparent'};
  }
  &__img__container {
    width: 30px;
    height: 30px;
    filter: ${({ isFocus, displayFocus }) =>
      isFocus && displayFocus
        ? 'sepia(100%) hue-rotate(170deg) brightness(60%) saturate(500%);'
        : ''};
  }
  &__img {
    width: 30px;
    height: 30px;
  }
`;

export default Icons;
