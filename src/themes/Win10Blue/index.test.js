import React from 'react';
import { render } from 'react-testing-library';
import Win10Blue from './index';

it('Win10Blue without crashing', () => {
  const { container } = render(<Win10Blue />);
  expect(container.innerHTML).toMatch(
    /SYSTEM_THREAD_EXCEPTION_PONIES_NOT_HANDLED/,
  );
});
