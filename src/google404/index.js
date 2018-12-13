import google from './google.pug';
import './google.scss';

export const render = () => {
  setTimeout(start);
  return google;
};

function start() {
  console.log('hi');
}
