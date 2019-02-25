import React from 'react';
import { Route } from 'react-router-dom';
import themes from 'src/themes';

const ThemeContainer = () =>
  themes.map(theme => (
    <Route key={theme.id} path={`/${theme.name}`} component={theme.component} />
  ));

export default ThemeContainer;
