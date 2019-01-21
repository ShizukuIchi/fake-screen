import React from 'react';
import { render } from 'react-testing-library';
import WannaCry from './index';

import { sleep } from 'src/lib';

it('WannaCry without crashing', async () => {
  const { container } = render(
    <WannaCry lose={[0, 0, 0, 2]} raise={[0, 0, 0, 2]} />,
  );
  await sleep(500);
  expect(container.innerHTML).toMatch(/00:00:00:01/);
  await sleep(2000);
  expect(container.innerHTML).toMatch(/00:00:00:00/);
  container.querySelector('#decrypt').click();
  container.querySelector('#copy').click();
  container.querySelector('#check').click();
  container.querySelector('#exit').click();
});
