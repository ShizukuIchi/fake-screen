import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-testing-library';
import Ubuntu from './index';

it('Ubuntu without crashing', async () => {
  const { container } = render(<Ubuntu />);
  expect(container.innerHTML).toMatch(/User/);
});
