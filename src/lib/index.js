export { default as CountDowner } from './CountDowner';

export const sleep = ms => new Promise(res => setTimeout(res, ms));
export const genID = () => {
  let id = 0;
  return () => id++;
};
