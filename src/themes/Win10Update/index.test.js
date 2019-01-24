import React from 'react';
import { render } from 'react-testing-library';
import Win10Update from 'src/themes/Win10Update';

it('Win10Update without crashing', () => {
  const { container } = render(<Win10Update />);
  expect(container.innerHTML).toMatch(/0/);
});
