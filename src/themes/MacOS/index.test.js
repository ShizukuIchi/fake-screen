import React from 'react';
import { render } from 'react-testing-library';
import MacOS from './index';

it('MacOS without crashing', () => {
  const { container } = render(<MacOS />);
  expect(container.innerHTML).toMatch(/About an hour remaining/);
});
