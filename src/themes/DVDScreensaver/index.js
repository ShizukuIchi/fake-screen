import React from 'react';
import styled from 'styled-components';
import DVDLogo from './DVDLogo';

function DVDScreensaver({ className }) {
  const [x, setX] = React.useState(10);
  const [ms, setMs] = React.useState(1000);
  const [color, setColor] = React.useState('#FFF');
  function onChange(e) {
    setX(e.target.value);
  }
  return (
    <div className={className}>
      <input type="text" value={x} onChange={onChange} />
      <div
        className="logo"
        style={{
          background: 'black',
          transform: `translate(${x}px, 0)`,
          transitionProperty: 'transform',
          transitionTimingFunction: 'linear',
          transitionDuration: `${ms}ms`,
        }}
      >
        <DVDLogo color={color} />
      </div>
    </div>
  );
}

export default styled(DVDScreensaver)`
  background-color: #000;
  height: 100%;
  .logo {
    width: 200px;
    height: 88px;
    overflow: hidden;
    background: white;
  }
`;
