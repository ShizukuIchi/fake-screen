export { default as CountDowner } from './CountDowner';

export const sleep = ms => new Promise(res => setTimeout(res, ms));
export const genID = () => {
  let id = 0;
  return () => id++;
};

export const isStr = str => testStr => str === testStr;
export const twoDigits = n => (n < 10 ? '0' : '') + n;
