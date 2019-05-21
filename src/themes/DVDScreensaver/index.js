import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import useWindowSize from 'react-use/lib/useWindowSize';
import { choose } from 'src/lib';
import DVDLogo from './DVDLogo';

const colors = [
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'skyblue',
  'purple',
];

function DVDScreensaver({ className }) {
  const ref = useRef();
  const velocity = useRef({ x: 2, y: 2 });
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [color, setColor] = useState(colors[0]);
  useLayoutEffect(() => {
    let raf;
    let vx = velocity.current.x;
    let vy = velocity.current.y;
    let {
      left: logoLeft,
      top: logoTop,
      width: logoWidth,
      height: logoHeight,
    } = ref.current.getBoundingClientRect();
    function animate() {
      let shouldUpdate = true;
      if (logoLeft < 0) {
        logoLeft = 0;
        vx = Math.abs(vx);
      } else if (logoLeft + logoWidth > windowWidth) {
        logoLeft = windowWidth - logoWidth;
        vx = -Math.abs(vx);
      } else if (logoTop < 0) {
        logoTop = 0;
        vy = Math.abs(vy);
      } else if (logoTop + logoHeight > windowHeight) {
        logoTop = windowHeight - logoHeight;
        vy = -Math.abs(vy);
      } else {
        shouldUpdate = false;
      }
      if (shouldUpdate) {
        velocity.current = { x: vx, y: vy };
        setColor(choose(colors));
      }
      logoLeft += vx;
      logoTop += vy;
      ref.current.style.transform = `translate(${logoLeft}px, ${logoTop}px)`;
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, [windowWidth, windowHeight]);
  return (
    <div className={className}>
      <div ref={ref} className="logo">
        <DVDLogo color={color} />
      </div>
    </div>
  );
}

export default styled(DVDScreensaver)`
  background-color: #000;
  height: 100%;
  cursor: none;
  overflow: hidden;
  .logo {
    overflow: hidden;
    width: 300px;
    height: 132px;
  }
  @media (max-width: 768px) {
    .logo {
      width: 150px;
      height: 66px;
    }
  }
`;
