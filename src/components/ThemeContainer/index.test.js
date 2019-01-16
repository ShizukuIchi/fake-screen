import React from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import ThemeContainer from './index';

const ThemeContainerWithRouter = withRouter(ThemeContainer);

it('ThemesContainer without crashing', () => {
  render(
    <HashRouter>
      <ThemeContainerWithRouter />
    </HashRouter>,
  );
});
