import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { choose } from 'src/lib';
import DVDLogo from './DVDLogo';

DVDScreensaver.defaultProps = {
  velocity: {
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
  bounding: {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0,
  },
  start: {
    x: 0,
    y: 0,
  },
  size: {
    width: 300,
    height: 132,
  },
};

function DVDScreensaver({
  className,
  velocity,
  colors,
  bounding,
  size,
  start,
}) {
  const ref = useRef();
  const [color, setColor] = useState(choose(colors));
  const { width, height } = size;
  useEffect(() => {
    let myRaf;
    let vx = velocity.x;
    let vy = velocity.y;
    let left = start.x;
    let top = start.y;
    function animate() {
      if (
        (vx < 0 && left <= bounding.left) ||
        (vx > 0 && left + width >= bounding.right)
      ) {
        setColor(choose(colors));
        vx = -vx;
      } else if (
        (vy < 0 && top <= bounding.top) ||
        (vy > 0 && top + height >= bounding.bottom)
      ) {
        setColor(choose(colors));
        vy = -vy;
      } else {
        left += vx;
        top += vy;
        ref.current.style.transform = `translate(${left}px, ${top}px)`;
      }
      myRaf = requestAnimationFrame(animate);
    }
    myRaf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(myRaf);
  }, []);
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
