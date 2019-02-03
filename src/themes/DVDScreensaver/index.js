import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import { choose } from 'src/lib';
import DVDLogo from './DVDLogo';

DVDScreensaver.defaultProps = {
  defaultVelocity: {
    x: 1.5,
    y: 1.5,
  },
  colors: [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'skyblue',
    'purple',
  ],
};

function DVDScreensaver({ className, defaultVelocity, colors }) {
  const ref = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [color, setColor] = useState(choose(colors));
  const [velocity, setVelocity] = useState(defaultVelocity);
  useEffect(
    () => {
      let myRaf;
      let canceled = false;
      let vx = velocity.x;
      let vy = velocity.y;
      let {
        width: logoWidth,
        height: logoHeight,
        left: logoLeft,
        top: logoTop,
      } = ref.current.getBoundingClientRect();
      function animate() {
        if (canceled) return;
        if (
          (vx < 0 && logoLeft <= 0) ||
          (vx > 0 && logoLeft + logoWidth >= windowWidth)
        ) {
          vx = -vx;
          setColor(choose(colors));
          setVelocity({ x: vx, y: vy });
        } else if (
          (vy < 0 && logoTop <= 0) ||
          (vy > 0 && logoTop + logoHeight >= windowHeight)
        ) {
          vy = -vy;
          setColor(choose(colors));
          setVelocity({ x: vx, y: vy });
        } else {
          logoLeft += vx;
          logoTop += vy;
          ref.current.style.transform = `translate(${logoLeft}px, ${logoTop}px)`;
        }
        myRaf = requestAnimationFrame(animate);
      }
      myRaf = requestAnimationFrame(animate);
      return () => {
        canceled = true;
        cancelAnimationFrame(myRaf);
      };
    },
    [windowWidth, windowHeight],
  );
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
