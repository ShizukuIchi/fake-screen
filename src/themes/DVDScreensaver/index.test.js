import React from 'react';
import { render } from 'react-testing-library';
import { sleep } from 'src/lib';
import DVDScreensaver from 'src/themes/DVDScreensaver';

it('DVDScreensaver render without crash', async () => {
  render(<DVDScreensaver defaultVelocity={{ x: 1000, y: 0 }} />);
  render(<DVDScreensaver defaultVelocity={{ x: 0, y: 1000 }} />);
  await sleep(1000);
});
