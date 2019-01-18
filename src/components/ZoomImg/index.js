import React from 'react';
import posed from 'react-pose';

const transition = {
  duration: 600,
  ease: [0.08, 0.69, 0.2, 0.99],
};

const Image = posed.img({
  init: {
    position: 'static',
    width: '100%',
    height: '100%',
    transition,
    flip: true,
    applyAtEnd: {
      zIndex: 1,
    },
  },
  zoom: {
    applyAtStart: {
      zIndex: 2,
    },
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
  },
});

const ZoomImg = ({ isZoomed, ...rest }) => {
  return <Image pose={isZoomed ? 'zoom' : 'init'} {...rest} />;
};

export default ZoomImg;
