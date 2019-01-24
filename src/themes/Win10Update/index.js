import React, { useState, useEffect } from 'react';
import Win10UpdateView from './Win10UpdateView';

function Win10Update() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setProgress(progress => progress + 1);
    }, Math.random() * 5000 + 5000);
    return () => {
      clearTimeout(timer);
    };
  });
  return <Win10UpdateView progress={progress} />;
}

export default Win10Update;
