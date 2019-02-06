import React, { useRef, useState } from 'react';
import useDrag from 'use-drag';
import MineSweeperView from './MineSweeperView';

function MineSweeper(props) {
  const ref = useRef(null);
  useDrag(ref);
  return (
    <div style={{ display: 'inline-block' }} ref={ref}>
      <MineSweeperView />
    </div>
  );
}

export default MineSweeper;
