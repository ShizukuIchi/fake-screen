import React, { useState } from 'react';
import { render } from 'react-testing-library';

import { useTimeout } from 'src/hooks';
import { sleep } from 'src/lib';

function TestTimeout() {
  const reset = useTimeout(1000, add, 2);
  useTimeout();
  const [count, setCount] = useState(0);
  function add(n) {
    setCount(count => count + n);
  }
  return <div onClick={reset}>{count}</div>;
}

it('useTimeout', async () => {
  const { container } = render(<TestTimeout />);
  expect(container.innerHTML).toMatch(/0/);
  await sleep(600);
  container.querySelector('div').click();
  await sleep(600);
  expect(container.innerHTML).toMatch(/0/);
  await sleep(600);
  expect(container.innerHTML).toMatch(/2/);
});
