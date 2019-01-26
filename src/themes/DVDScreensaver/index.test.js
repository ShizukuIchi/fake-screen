import React from 'react';
import { render } from 'react-testing-library';
import { sleep } from 'src/lib';
import DVDScreensaver from 'src/themes/DVDScreensaver';

it('DVDScreensaver move logo', async () => {
  render(
    <DVDScreensaver bounding={{ top: 0, right: 10, bottom: 10, left: 0 }} />,
  );
  await sleep(100);
});

it('DVDScreensaver zero bounding', async () => {
  render(
    <DVDScreensaver bounding={{ top: 0, right: 0, bottom: 0, left: 0 }} />,
  );

  await sleep(100);
});
