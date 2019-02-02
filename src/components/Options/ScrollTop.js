import React from 'react';
import styled from 'styled-components';
function ScrollTop({ className, onClick }) {
  return (
    <div onClick={onClick} className={className}>
      Top
    </div>
  );
}

export default styled(ScrollTop)`
  background-color: rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  color: white;
  line-height: 47px;
  text-align: center;
  transition: opacity 0.5s;
  opacity: ${({ show }) => (show ? 1 : 0)};
  cursor: ${({ show }) => (show ? 'pointer' : 'default')};
`;
