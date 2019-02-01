import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { themes } from 'src/themes';

const ThemeContainer = () => {
  return (
    <Switch>
      {themes.map(theme => (
        <Route
          key={theme.id}
          path={`/${theme.name}`}
          component={theme.component}
        />
      ))}
    </Switch>
  );
};

export default ThemeContainer;
