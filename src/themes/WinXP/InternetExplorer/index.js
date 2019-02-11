import React from 'react';
import styled from 'styled-components';
import { Google } from 'src/themes';

function InternetExplorer() {
  return (
    <Div>
      <header className="ie__header">www.google.com</header>
      <div className="ie__content">
        <div className="ie__content__inner">
          <Google />
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .ie__header {
    height: 30px;
    background-color: gray;
  }
  .ie__content {
    flex: 1;
    overflow: auto;
  }
  .ie__content__inner {
    min-height: 800px;
    position: relative;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
`;

export default InternetExplorer;
