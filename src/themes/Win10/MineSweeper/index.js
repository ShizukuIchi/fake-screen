import React, { useRef } from 'react';
import useDrag from 'src/hooks/useDrag';
import MineSweeperView from './MineSweeperView';

function MineSweeper() {
  const ref = useRef();
  const offset = useDrag(ref);
  const { x, y } = offset;
  return (
    <div
      style={{
        display: 'inline-block',
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <MineSweeperView ref={ref} />
    </div>
  );
}

export default MineSweeper;
