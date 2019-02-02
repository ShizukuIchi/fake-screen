import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BScroll from 'better-scroll';
import { themes } from 'src/themes';
import Option from 'src/components/Options/Option';
import GithubCorner from './GithubCorner';
import ScrollTop from './ScrollTop';
require('intersection-observer');

const Options = ({ className }) => {
  const wrapper = useRef();
  const scroll = useRef();
  const header = useRef();
  const [inView, set] = useState(false);
  useEffect(() => {
    const ratio = 0.2;
    const options = {
      threshold: ratio,
    };
    const callback = entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= ratio) set(true);
        else set(false);
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(header.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    scroll.current = new BScroll(wrapper.current, {
      bounce: {
        top: false,
        bottom: false,
      },
      click: true,
      tap: true,
    });

    return () => {
      scroll.current.destroy();
    };
  }, []);
  function onClick() {
    scroll.current.scrollTo(0, 0, 300);
    wrapper.current.scrollTop = 0;
  }
  return (
    <div className={className} ref={wrapper}>
      <div className="container">
        <header ref={header}>
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
      <ScrollTop onClick={onClick} show={!inView} />
    </div>
  );
};

export default styled(Options)`
  height: 100%;
  position: relative;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
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
