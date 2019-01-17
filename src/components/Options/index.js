import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import { themes } from 'src/themes';
import Option from 'src/components/Options/Option';

const Options = ({ location, className }) => {
  return (
    <Div
      className={className}
      pose={location.pathname === '/' ? 'enter' : 'exit'}
    >
      <div className="grid">
        {themes.map(({ id, fullScreen, name, ...rest }) => (
          <Link
            className="area"
            key={id}
            to={{ pathname: `/${name}`, state: { fullScreen } }}
          >
            <Option name={name} {...rest} />
          </Link>
        ))}
      </div>
    </Div>
  );
};

const Div = posed.div({
  enter: {
    applyAtStart: { display: 'block' },
    opacity: 1,
  },
  exit: {
    opacity: 0,
    applyAtEnd: { display: 'none' },
  },
});

export default styled(Options)`
  height: 100%;
  position: absolute;
  width: 100%;
  overflow: auto;
  z-index: 2;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 300px;
    grid-gap: 10px 10px;
    justify-content: center;
  }
  .area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;
