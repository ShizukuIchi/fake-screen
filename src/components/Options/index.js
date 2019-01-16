import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import { themes } from 'src/assets/data';
import Option from 'src/components/Options/Option';

const Options = ({ location, className }) => {
  return (
    <Div
      className={className}
      pose={location.pathname === '/' ? 'enter' : 'exit'}
    >
      <div className="content">
        {themes.map(({ id, fullScreen, name, ...rest }) => (
          <Link key={id} to={{ pathname: `/${name}`, state: { fullScreen } }}>
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
  overflow: hidden;
  z-index: 2;
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-template-rows: repeat(auto-fill, 200px);
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    height: 100%;
  }
`;
