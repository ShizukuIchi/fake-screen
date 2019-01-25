import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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
  const [direction, setDirection] = useState({ dx: 1.5, dy: 1.5 });
  const ref = useRef();
  const [color, setColor] = useState('#FFF');
  function change(dx, dy) {
    setDirection({ dx, dy });
    setColor(colors[Math.floor(Math.random() * 5)]);
  }
  function animate() {
    if (!ref.current) return requestAnimationFrame(animate);
    let { dx, dy } = direction;
    const { top, right, bottom, left } = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${left + dx}px, ${top + dy}px)`;
    if ((dx < 0 && left <= 0) || (dx > 0 && right >= window.innerWidth))
      dx = -dx;
    if ((dy < 0 && top <= 0) || (dy > 0 && bottom >= window.innerHeight))
      dy = -dy;
    if (dx !== direction.dx || dy !== direction.dy) change(dx, dy);
    else requestAnimationFrame(animate);
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
