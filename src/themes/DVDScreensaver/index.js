import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import { choose } from 'src/lib';
import { useMediaStyles } from 'src/hooks';
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
  start: {
    x: 0,
    y: 0,
  },
};

function DVDScreensaver({ className, defaultVelocity, colors, start }) {
  const ref = useRef();
  const { width, height } = useMediaStyles({
    '(max-width: 768px)': {
      width: 150,
      height: 66,
    },
    '(min-width: 769px)': {
      width: 300,
      height: 132,
    },
  });
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [color, setColor] = useState(choose(colors));
  const [velocity, setVelocity] = useState(defaultVelocity);
  useEffect(
    () => {
      let myRaf;
      let vx = velocity.x;
      let vy = velocity.y;
      let {
        left: logoLeft,
        top: logoTop,
      } = ref.current.getBoundingClientRect();
      function animate() {
        if (
          (vx < 0 && logoLeft <= 0) ||
          (vx > 0 && logoLeft + width >= windowWidth)
        ) {
          setColor(choose(colors));
          setVelocity({ x: vx, y: vy });
          vx = -vx;
        } else if (
          (vy < 0 && logoTop <= 0) ||
          (vy > 0 && logoTop + height >= windowHeight)
        ) {
          setColor(choose(colors));
          setVelocity({ x: vx, y: vy });
          vy = -vy;
        } else {
          logoLeft += vx;
          logoTop += vy;
          ref.current.style.transform = `translate(${logoLeft}px, ${logoTop}px)`;
        }
        myRaf = requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
      return () => cancelAnimationFrame(myRaf);
    },
    [windowWidth, windowHeight],
  );
  return (
    <div className={className}>
      <div
        ref={ref}
        className="logo"
        style={{
          width: `${width}px`,
          height: `${height}px`,
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
    overflow: hidden;
  }
`;
