import React, { useState, useEffect } from 'react';
import Win10UpdateView from './Win10UpdateView';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

function Win10Update() {
  const [progress, setProgress] = useState(0);
  useEffect(
    () => {
      let timer = setTimeout(() => {
        setProgress(progress => progress + 1);
      }, getRandomTime());
      return () => {
        clearTimeout(timer);
      };
    },
    [progress],
  );
  return <Win10UpdateView progress={progress} />;
}

export default Win10Update;
