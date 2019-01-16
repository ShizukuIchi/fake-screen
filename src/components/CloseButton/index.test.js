import React from 'react';
import { render } from 'react-testing-library';
import Component from './index';
import { HashRouter, Route } from 'react-router-dom';

it('render without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <Route render={props => <Component {...props} />} />
    </HashRouter>,
  );
  getByText('X').click();
});

it('render no match without crashing ', () => {
  const { getByText } = render(
    <HashRouter>
      <Route render={props => <Component {...props} location="/no" />} />
    </HashRouter>,
  );
  getByText('X').click();
});
