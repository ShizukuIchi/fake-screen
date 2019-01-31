import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContainer, Options, CloseButton } from 'src/components';
import { useSafariNoScale } from 'src/hooks';

const App = props => {
  useSafariNoScale();
  return (
    <Router>
      <Route
        render={routerProps => (
          <div className={props.className}>
            <CloseButton {...routerProps} />
            <Options {...routerProps} />
            <ThemeContainer {...routerProps} />
          </div>
        )}
      />
    </Router>
  );
};

export default styled(App)`
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #fff9c4;
`;
