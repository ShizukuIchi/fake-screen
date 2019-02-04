import React, { forwardRef } from 'react';
import styled from 'styled-components';

function MineSweeperView(props, ref) {
  return (
    <Div>
      <header ref={ref} />
    </Div>
  );
}

const Div = styled.div`
  width: 200px;
  height: 200px;
  background: pink;
  header {
    height: 30px;
    background-color: red;
  }
`;

export default forwardRef(MineSweeperView);
