import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { ThemeRoutes, Options, CloseButton } from 'src/components';
import { useNoScale } from 'src/hooks';

const App = () => {
  useNoScale();
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <Router>
      <CloseButton />
      <Route exact path="/" component={Options} />
      <ThemeRoutes />
    </Router>
  );
};

export default App;
