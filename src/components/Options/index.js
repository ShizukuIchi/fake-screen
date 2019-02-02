import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { themes } from 'src/themes';
import Option from 'src/components/Options/Option';
import GithubCorner from './GithubCorner';
import ScrollTop from './ScrollTop';

const Options = ({ className }) => {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const top = document.documentElement.scrollTop + document.body.scrollTop;
      if (top >= 130) setInView(false);
      else setInView(true);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
  function onScrollTop() {
    document.documentElement.scroll({ top: 0, behavior: 'smooth' });
    document.body.scroll({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className={className}>
      <div className="container">
        <header>
          <a href="https://github.com/ShizukuIchi/fake-screen">
            <span className="title">Fake Screen</span>
          </a>
          <GithubCorner />
        </header>
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
      </div>
      <ScrollTop onClick={onScrollTop} show={!inView} />
    </div>
  );
};

export default styled(Options)`
  height: 100%;
  position: relative;
  width: 100%;
  .container {
    background-color: #fff9c4;
    min-height: 100%;
  }
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    filter: drop-shadow(rgba(61, 193, 211, 0.8) 1px 1px 1.5px);
    .title {
      color: #64ceaa;
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
    padding-bottom: 60px;
  }
  .area {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
