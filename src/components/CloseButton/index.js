import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const CloseButton = props => {
  function goBack() {
    if (props.location.pathname !== '/') props.history.goBack();
  }
  return (
    <Div
      className={props.className}
      pose={props.location.pathname === '/' ? 'exit' : 'enter'}
    >
      <button onClick={goBack}>X</button>
    </Div>
  );
};

const Div = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0.5,
  },
});

export default styled(CloseButton)`
  position: absolute;
  z-index: 3;
  button {
    font-size: 2em;
    width: 50px;
    height: 50px;
  }
`;
