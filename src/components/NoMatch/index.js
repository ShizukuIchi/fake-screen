import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function NoMatch() {
  const shadow = useRef(null);
  useEffect(() => {
    const target = shadow.current;
    if (!target) return;
    function mouseMove(e) {
      const { clientX, clientY } = e;
      target.style[
        '-webkit-mask-image'
      ] = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(0,0,0,0.0) 0, rgba(0,0,0,1) 30%)`;
    }
    target.style[
      '-webkit-mask-image'
    ] = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.0) 0, rgba(0,0,0,1) 30%)`;
    target.addEventListener('mousemove', mouseMove);
    return () => {
      target.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  useEffect(() => {});
  return (
    <>
      <Background>
        <div className="text">404</div>
        <div className="text">Not Found</div>
        <div className="hint">{'<'} Home Page</div>
      </Background>
      <Shadow ref={shadow}>
        <div className="hint">{'<'} Home Page</div>
      </Shadow>
    </>
  );
}

const hintAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
`;
const Background = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .text:nth-child(1) {
    font-size: 150px;
  }
  .text {
    font-weight: 700;
    font-size: 130px;
  }
  .hint {
    animation: ${hintAnimation} 1.5s infinite;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
    position: absolute;
    top: 0;
    left: 50px;
    height: 50px;
    line-height: 50px;
    color: black;
  }
`;
const Shadow = styled.div`
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  position: absolute;
  .hint {
    animation: ${hintAnimation} 1.5s infinite;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
    position: absolute;
    top: 0;
    left: 50px;
    height: 50px;
    line-height: 50px;
    color: white;
  }
`;

export default NoMatch;
