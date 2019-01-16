import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import Themes from './index';
import Theme from './Theme';
import { themes } from 'src/assets/data';

it('Themes without crashing', () => {
  const { getByText } = render(
    <Router>
      <Themes />
    </Router>,
  );
  expect(getByText(themes[0].displayName));
});
it('Theme without crashing', () => {
  render(<Theme />);
});
