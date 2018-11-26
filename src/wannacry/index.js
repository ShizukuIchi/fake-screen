import 'babel-polyfill';
import { getDay, formatHintDay, Timer } from './time.js';
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
  const t3 = new Timer(3);
  pay.innerHTML = t3.format();
  const i3 = setInterval(() => {
    if (t3.tick() && document.querySelector('.wannacry-wrapper')) {
      pay.innerHTML = t3.format();
    } else clearInterval(i3);
  }, 1000);
  const t7 = new Timer(7);
  lost.innerHTML = t7.format();
  const i7 = setInterval(() => {
    if (t7.tick() && document.querySelector('.wannacry-wrapper'))
      lost.innerHTML = t7.format();
    else clearInterval(i7);
  }, 1000);
}
