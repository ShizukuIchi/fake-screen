import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-testing-library';
import Options from './index';
import Option from 'src/components/Options/Option';
import { themes } from 'src/assets/data';
import { sleep } from 'src/lib';

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

it('Options no content without crashing', async () => {
  const { container } = render(
    <Router>
      <div>
        <Options location={{ pathname: '/no' }} />
      </div>
    </Router>,
  );
  expect(container.innerText).toBeFalsy();
});

it('Option without crashing', () => {
  render(<Option />);
});
