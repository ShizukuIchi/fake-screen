import React from 'react';
import Win10View from './Win10View';
import MineSweeper from './MineSweeper';
import styled from 'styled-components';

function Win10() {
  return (
    <StyledWin10>
      <Win10View />
      <MineSweeper />
    </StyledWin10>
  );
}

const StyledWin10 = styled.div`
  height: 100%;
  overflow: hidden;
  * {
    user-select: none;
  }
`;

export default Win10;
