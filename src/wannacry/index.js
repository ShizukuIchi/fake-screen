import 'babel-polyfill';
import CountDowner from './CountDowner.js';
import './wannacry.scss';
import wannacry from './wannacry.pug';

export const render = () => {
  setTimeout(start);
  return wannacry;
};

function start() {
  const pay = document.querySelector('#pay');
  const lost = document.querySelector('#lost');

  const now = new Date();
  const payDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 3,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  );
  const lostDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 7,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  );
  const payCountDowner = new CountDowner(payDate);
  pay.innerHTML = payCountDowner.formatLast();
  document.querySelector('#pay-on').innerHTML = payCountDowner.formatTill();
  payCountDowner.on('second', () => {
    pay.innerHTML = payCountDowner.formatLast();
  });
  const lostCountDowner = new CountDowner(lostDate);
  lost.innerHTML = lostCountDowner.formatLast();
  document.querySelector('#lost-on').innerHTML = lostCountDowner.formatTill();
  lostCountDowner.on('second', () => {
    lost.innerHTML = lostCountDowner.formatLast();
  });
}
