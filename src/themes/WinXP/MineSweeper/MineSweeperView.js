import React from 'react';
import styled from 'styled-components';

function MineSweeperView() {
  return (
    <Div>
      <header />
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

export default MineSweeperView;
