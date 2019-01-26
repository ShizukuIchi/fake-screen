import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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
};

function DVDScreensaver({ className, velocity, colors, bounding }) {
  const [direction, setDirection] = useState({
    dx: velocity.x,
    dy: velocity.y,
  });
  const ref = useRef();
  const [color, setColor] = useState('#FFF');
  function change(dx, dy, color) {
    setDirection({ dx, dy });
    setColor(color);
  }
  function animate() {
    if (!ref.current) return requestAnimationFrame(animate);
    let { dx, dy } = direction;
    const { top, right, bottom, left } = ref.current.getBoundingClientRect();

    if (
      (dx < 0 && left <= bounding.left) ||
      (dx > 0 && right >= bounding.right)
    )
      dx = -dx;
    if (
      (dy < 0 && top <= bounding.top) ||
      (dy > 0 && bottom >= bounding.bottom)
    )
      dy = -dy;
    if (dx !== direction.dx || dy !== direction.dy) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      change(dx, dy, color);
    } else {
      ref.current.style.transform = `translate(${left + dx}px, ${top + dy}px)`;
      requestAnimationFrame(animate);
    }
  }
  useEffect(
    () => {
      const myRaf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(myRaf);
    },
    [direction],
  );
  return (
    <div className={className}>
      <div
        ref={ref}
        className="logo"
        style={{
          background: 'black',
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
    width: 300px;
    height: 132px;
    overflow: hidden;
    background: white;
  }
`;
