import React from 'react';
import { render } from 'react-testing-library';
import Win10Update from 'src/themes/Win10Update';
import { sleep } from 'src/lib';

it('Win10Update without crashing', async () => {
  render(<Win10Update />);
  const { container } = render(<Win10Update randomFn={() => 1000} />);
  expect(container.innerHTML).toMatch(/0/);
  await sleep(1100);
  expect(container.innerHTML).toMatch(/1/);
});
