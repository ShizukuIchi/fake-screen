import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { Options, CloseButton, GoogleAnalytics, NoMatch } from 'src/components';
import themes from 'src/themes';
import { useNoScale } from 'src/hooks';

const App = () => {
  useNoScale();
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <Router>
      {!window.frameElement && (
        <>
          <CloseButton />
          <Route component={GoogleAnalytics} />
        </>
      )}
      <Switch>
        <Route exact path="/" component={Options} />
        {themes.map(theme => (
          <Route
            key={theme.id}
            path={`/${theme.name}`}
            component={theme.component}
          />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
