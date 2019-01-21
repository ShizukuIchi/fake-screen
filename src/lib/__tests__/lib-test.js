import { sleep, genID, isStr, twoDigits } from 'src/lib';

it('sleep lib', async () => {
  const now = new Date();
  await sleep(1000);
  expect(new Date() - now >= 1000);
});

it('genID', () => {
  const getID = genID();
  expect([getID(), getID(), getID()]).toEqual([0, 1, 2]);
});

it('isPath', () => {
  const isA = isStr('A');
  expect(isA('A')).toBeTrue();
  expect(isStr('A')('B')).toBeFalse();
});

it('fix number to two digits', () => {
  expect(twoDigits(1)).toBe('01');
  expect(twoDigits(10)).toBe('10');
});
