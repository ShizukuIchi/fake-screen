import React from 'react';
import { render } from 'react-testing-library';
import MacOS, { getText, progressReducer, initState } from 'src/themes/MacOS';
import { sleep } from 'src/lib';

jest.setTimeout(12000);

it('MacOS without crashing', async () => {
  const { container } = render(<MacOS />);
  await sleep(5000);
  expect(container.innerHTML).toMatch(/About an hour remaining/);
});

it('MacOS without crashing2', async () => {
  render(<MacOS initState={{ value: 101 }} />);
  await sleep(11000);
});

it('get correct hint text ', () => {
  expect(getText(0)).toBe('About an hour remaining');
  expect(getText(3)).toBe(
    'Installation is in progress. Calculating time remaining...',
  );
  expect(getText(6)).toBe('About an hour remaining');
  expect(getText(99)).toBe(
    `About ${Math.ceil(((100 - 99) * 2.5 * 2.4) / 60)} minutes remaining`,
  );
});

it('reducer works great', () => {
  expect(progressReducer({ value: 1, hint: '' }, { type: 'NEXT' })).toEqual({
    value: 1.4,
    hint: getText(1.4),
  });
  expect(progressReducer(initState, { type: 'CLEAR' })).toEqual(initState);
  expect(progressReducer()).toEqual(initState);
});
