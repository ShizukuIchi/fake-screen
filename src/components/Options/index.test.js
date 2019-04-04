import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-testing-library';
import Options from './index';
import Option from 'src/components/Options/Option';

it('Options has content without crashing', () => {
  const { container } = render(
    <Router>
      <Route
        path="/"
        render={({ location }) => <Options location={location} />}
      />
    </Router>,
  );
  expect(container.innerHTML).toMatch(/Google/);
});
