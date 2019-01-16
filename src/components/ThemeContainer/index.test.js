import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import ThemeContainer from './index';

it('ThemesContainer without crashing', () => {
  render(
    <Router>
      <ThemeContainer />
    </Router>,
  );
});
