import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { themes } from 'src/assets/data';

const ThemeContainer = () => {
  return (
    <Switch>
      {themes.map(theme => (
        <Route
          key={theme.id}
          path={`/${theme.name}`}
          render={() => <C t={theme.displayName} />}
        />
      ))}
    </Switch>
  );
};
export const C = p => <div>{p.t}</div>;
export default ThemeContainer;
