import React, { useRef, useReducer, useLayoutEffect } from 'react';
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

export const initState = {
  color: 'white',
  velocity: { x: 2, y: 2 },
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'CLEAR':
      return initState;
    default:
      return state;
  }
};
function DVDScreensaver({ className }) {
  const ref = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [state, dispatch] = useReducer(reducer, initState);
  useLayoutEffect(() => {
    const { velocity } = state;
    let myRaf;
    // let canceled = false;
    let vx = velocity.x;
    let vy = velocity.y;
    let {
      left: logoLeft,
      top: logoTop,
      width: logoWidth,
      height: logoHeight,
    } = ref.current.getBoundingClientRect();
    function animate() {
      // if (canceled) return;
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
        logoLeft += vx;
        logoTop += vy;
        ref.current.style.transform = `translate(${logoLeft}px, ${logoTop}px)`;
      }
      if (shouldUpdate) {
        dispatch({
          type: 'SET',
          payload: {
            velocity: {
              x: vx,
              y: vy,
            },
            color: choose(colors),
          },
        });
      }
      myRaf = requestAnimationFrame(animate);
    }
    myRaf = requestAnimationFrame(animate);
    return () => {
      // canceled = true;
      cancelAnimationFrame(myRaf);
    };
  }, [windowWidth, windowHeight]);
  return (
    <div className={className}>
      <div ref={ref} className="logo">
        <DVDLogo color={state.color} />
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
