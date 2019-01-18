import React from 'react';
import { render } from 'react-testing-library';
import CloseButton, { isDark, getColor } from './index';
import { HashRouter, Route } from 'react-router-dom';

it('CloseButton render without crashing', () => {
  const { container } = render(
    <HashRouter>
      <Route render={props => <CloseButton {...props} dark={true} />} />
    </HashRouter>,
  );
  container.querySelector('button').click();
  expect(container.style.opacity === 0.4);
});

it('CloseButton render no match without crashing ', () => {
  const { container } = render(
    <HashRouter>
      <Route
        render={props => (
          <CloseButton {...props} location={{ pathname: '/no-match' }} />
        )}
      />
    </HashRouter>,
  );
  container.querySelector('button').click();
  expect(container.style.opacity === 0);
});

it('define if bg is dark', () => {
  expect(isDark('/macOS')).toBeTrue();
  expect(isDark('/win10-crash')).toBeFalse();
});

it('get right background color', () => {
  expect(getColor({ dark: true })).toBe('white');
  expect(getColor({ dark: false })).toBe('rgb(22, 22, 22)');
});
