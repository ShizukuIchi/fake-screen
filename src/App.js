import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeRoutes, Options, CloseButton } from 'src/components';
import { useSafariNotScale } from 'src/hooks';

const App = () => {
  useSafariNotScale();
  return (
    <Router>
      <CloseButton />
      <Route exact path="/" component={Options} />
      <ThemeRoutes />
    </Router>
  );
};

export default App;
