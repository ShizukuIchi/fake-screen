import React from 'react';
import { render } from 'react-testing-library';
import { sleep } from 'src/lib';
import DVDScreensaver from 'src/themes/DVDScreensaver';

it('DVDScreensaver render without crash', async () => {
  render(
    <DVDScreensaver
      size={{ width: 1, height: 1 }}
      bounding={{ top: 0, right: 2, bottom: 2, left: 0 }}
    />,
  );
  render(<DVDScreensaver />);
  await sleep(500);
});
