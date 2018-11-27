import 'babel-polyfill';
import { getDay, formatHintDay, CountDowner } from './time.js';
import './wannacry.scss';
import wannacry from './wannacry.pug';

export const render = () => {
  setTimeout(start);
  return wannacry;
};

function start() {
  document.querySelector('#pay-on').innerHTML = formatHintDay(getDay(3));
  document.querySelector('#lost-on').innerHTML = formatHintDay(getDay(7));
  const pay = document.querySelector('#pay');
  const lost = document.querySelector('#lost');
  const t3 = new CountDowner({ day: 3, hour: 0, minute: 0, second: 0 });
  const t7 = new CountDowner({ day: 7, hour: 0, minute: 0, second: 0 });
  pay.innerHTML = t3.format();
  t3.on('second', () => {
    pay.innerHTML = t3.format();
  });
  t3.start();
  lost.innerHTML = t7.format();
  t7.on('second', () => {
    lost.innerHTML = t7.format();
  });
  t7.start();
}
