import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Themes, ThemeContainer } from 'src/components';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="close">x</div>
          <Route exact path="/" component={Themes} />
          <ThemeContainer />
        </div>
      </Router>
    );
  }
}

export default App;
