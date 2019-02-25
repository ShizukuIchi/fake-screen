import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import {
  ThemeRoutes,
  Options,
  CloseButton,
  GoogleAnalytics,
} from 'src/components';
import { useNoScale } from 'src/hooks';

const App = () => {
  useNoScale();
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <Router>
      {!window.frameElement && <CloseButton />}
      <Route component={GoogleAnalytics} />
      <Switch>
        <Route exact path="/" component={Options} />
        <ThemeRoutes />
      </Switch>
    </Router>
  );
};

export default App;
