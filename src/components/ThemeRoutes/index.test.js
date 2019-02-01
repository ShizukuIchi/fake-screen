import React from 'react';
import { withRouter, HashRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import ThemeRoutes from 'src/components/ThemeRoutes';

const ThemeRoutesWithRouter = withRouter(ThemeRoutes);

it('ThemesRoutes without crashing', () => {
  render(
    <HashRouter>
      <ThemeRoutesWithRouter />
    </HashRouter>,
  );
});
