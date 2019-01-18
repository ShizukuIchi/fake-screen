import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import { themes } from 'src/themes';
import Option from 'src/components/Options/Option';
import githubLogo from 'src/assets/github-logo.svg';

const Options = ({ location, className }) => {
  return (
    <Div
      className={className}
      pose={location.pathname === '/' ? 'enter' : 'exit'}
    >
      <header>
        <a
          href="https://github.com/ShizukuIchi/fake-screen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="title">Fake Screen</span>
          <img className="logo" src={githubLogo} alt="github-logo" />
        </a>
      </header>
      <div className="grid">
        {themes.map(({ id, fullScreen, name, ...rest }) => (
          <Link
            className="area"
            key={id}
            to={{ pathname: `/${name}`, state: { fullScreen } }}
          >
            <Option
              name={name}
              {...rest}
              zoom={location.pathname === `/${name}` ? true : false}
            />
          </Link>
        ))}
      </div>
    </Div>
  );
};

const Div = posed.div({
  enter: {
    zIndex: 1,
  },
  exit: {
    applyAtStart: { zIndex: 0 },
  },
});

export default styled(Options)`
  height: 100%;
  position: absolute;
  width: 100%;
  overflow: auto;
  z-index: 2;
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    filter: drop-shadow(rgba(61, 193, 211, 0.8) 1px 1px 1.5px);
    .title {
      color: #63cdda;
      text-align: center;
      font-size: 2em;
    }
    a {
      text-decoration: none;
    }
  }
  .logo {
    width: 2em;
    height: 2em;
    margin-left: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 288px);
    grid-auto-rows: 162px;
    grid-gap: 40px 40px;
    justify-content: center;
  }
  .area {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
