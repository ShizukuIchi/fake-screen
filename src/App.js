import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContainer, Options, CloseButton } from 'src/components';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={props => (
            <div className={this.props.className}>
              <CloseButton {...props} />
              <Options {...props} />
              <ThemeContainer {...props} />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default styled(App)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;
