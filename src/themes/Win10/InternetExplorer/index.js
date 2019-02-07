import React from 'react';
import styled from 'styled-components';

function InternetExplorer() {
  return (
    <div style={{ height: '500px', width: '500px' }}>
      <Div>
        <header>url</header>
        <div className="content" />
      </Div>
    </div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  header {
    height: 30px;
  }
  .content {
    flex: 1;
  }
`;

export default InternetExplorer;
