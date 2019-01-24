import React, { useState, useEffect } from 'react';
import Win10UpdateView from './Win10UpdateView';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

Win10Update.defaultProps = {
  randomFn: getRandomTime,
};

function Win10Update({ randomFn }) {
  const [progress, setProgress] = useState(0);
  useEffect(
    () => {
      let timer = setTimeout(() => {
        setProgress(progress => progress + 1);
      }, randomFn());
      return () => {
        clearTimeout(timer);
      };
    },
    [progress],
  );
  return <Win10UpdateView progress={progress} />;
}

export default Win10Update;
