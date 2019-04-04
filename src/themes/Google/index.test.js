import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GoogleContainer, { Google } from 'src/themes/Google';

it('Result hello without crashing', () => {
  const { getByTestId } = render(<GoogleContainer />);
  getByTestId('enter').click();
  fireEvent.keyDown(getByTestId('input'), {
    key: 'Enter?',
  });

  fireEvent.change(getByTestId('input'), {
    target: {
      value: '123',
    },
  });
  fireEvent.keyDown(getByTestId('input'), {
    key: 'Enter',
  });
  expect(getByTestId('content').innerHTML).toMatch(/123/);
  fireEvent.change(getByTestId('input2'), {
    target: {
      value: '1234',
    },
  });
  getByTestId('search').click();
  fireEvent.keyDown(getByTestId('input2'), {
    key: 'Enter?',
  });

  fireEvent.keyDown(getByTestId('input2'), {
    key: 'Enter',
  });
  const maps = getByTestId('Maps');
  maps.click();
  expect(maps.className).toMatch(/active/);
  getByTestId('logo').click();
  const { rerender } = render(<Google route="???" />);
  rerender(<Google query="???" />);
});
