import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-testing-library';
import WannaCry, { setClipboardData } from 'src/themes/WannaCry';
import { sleep } from 'src/lib';

it('WannaCry without crashing', async () => {
  const { container } = render(
    <HashRouter>
      <Route
        render={props => (
          <WannaCry lose={[0, 0, 0, 2]} raise={[0, 0, 0, 2]} {...props} />
        )}
      />
    </HashRouter>,
  );
  expect(container.innerHTML).toMatch(/00:00:00:02/);
  await sleep(2500);
  expect(container.innerHTML).toMatch(/00:00:00:00/);
  container.querySelector('#decrypt').click();
  container.querySelector('#copy').click();
  container.querySelector('#check').click();
  container.querySelector('#exit').click();
});

it('setCliopboardData', () => {
  setClipboardData({
    preventDefault: () => ({}),
    clipboardData: { setData: () => ({}) },
  });
  setClipboardData({
    preventDefault: () => ({}),
  });
});
