import React, { useRef } from 'react';
import useDrag from 'use-drag';
import styled from 'styled-components';

function Windows({ apps, onMouseDown }) {
  return apps.map(app => (
    <Window key={app.id} onMouseDown={onMouseDown.bind(null, app.id)}>
      <app.component />
    </Window>
  ));
}

function Window({ children, ...rest }) {
  const ref = useRef(null);
  useDrag(ref);
  return (
    <StyledWindow {...rest} ref={ref}>
      {children}
    </StyledWindow>
  );
}

const StyledWindow = styled.div`
  position: absolute;
  display: inline-block;
`;

export default Windows;
