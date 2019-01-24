import React, { useState } from 'react';
import Win10UpdateView from './Win10UpdateView';

function Win10Update() {
  const [progress, setProgress] = useState(0);
  return <Win10UpdateView progress={progress} />;
}

export default Win10Update;
