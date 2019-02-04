import React, { useRef } from 'react';
import useDrag from 'src/hooks/useDrag';
import MineSweeperView from './MineSweeperView';

function MineSweeper() {
  const ref = useRef();
  useDrag(ref);
  return (
    <div style={{ display: 'inline-block' }} ref={ref}>
      <MineSweeperView />
    </div>
  );
}

export default MineSweeper;
