import React from 'react';
import { render } from 'react-testing-library';
import Component from './index';
import { HashRouter, Route } from 'react-router-dom';

it('render without crashing', () => {
  const { container } = render(
    <HashRouter>
      <Route render={props => <Component {...props} />} />
    </HashRouter>,
  );
  container.querySelector('button').click();
  expect(container.style.opacity === 0.4);
});

it('render no match without crashing ', () => {
  const { container, getByLabelText } = render(
    <HashRouter>
      <Route render={props => <Component {...props} location="/no" />} />
    </HashRouter>,
  );
  container.querySelector('button').click();
  expect(container.style.opacity === 0);
});
