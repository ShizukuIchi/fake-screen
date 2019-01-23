import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function Popup({
  className,
  left,
  top,
  options,
  onOptionClick,
  onClose,
  show,
}) {
  const ref = useRef();
  function close(e) {
    if (!ref.current.contains(e.target)) {
      onClose();
    }
  }
  useEffect(() => {
    if (show) {
      window.addEventListener('click', close);
    }
    return () => window.removeEventListener('click', close);
  });
  return (
    <ul ref={ref} className={className} style={{ left, top }}>
      {options.map(item => (
        <li
          className="item"
          key={item.id}
          onClick={() => onOptionClick(item.id)}
        >
          <div
            className="circle"
            style={{ visibility: item.selected ? 'visible' : 'hidden' }}
          />
          <span className="text">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

Popup.defaultProps = {
  options: [],
  left: '0',
  top: '0',
};

export default styled(Popup)`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  padding: 16px 0 14px;
  width: 290px;
  background-color: rgb(50, 50, 50);
  border-radius: 2px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 6px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(50, 50, 50);
  }
  .item {
    display: flex;
    align-items: center;
    line-height: 2em;
    height: 2em;
    list-style: none;
    font-size: 0.9em;
    padding-left: 2px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .circle {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle:before {
    content: '';
    display: block;
    width: 3.5px;
    height: 3.5px;
    background-color: white;
    border-radius: 50%;
  }
`;
