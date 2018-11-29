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
  const payOn = document.querySelector('#pay-on');
  const payProgress = document.querySelector('#pay-progress');
  const lost = document.querySelector('#lost');
  const lostOn = document.querySelector('#lost-on');
  const lostProgress = document.querySelector('#lost-progress');

  const now = new Date();
  const payDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds() + 10,
  );
  const lostDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours() + 1,
    now.getMinutes(),
    now.getSeconds(),
  );
  const payCountDowner = new CountDowner(payDate);
  pay.innerHTML = payCountDowner.formatLast();
  payOn.innerHTML = payCountDowner.formatTill();
  payCountDowner.on('second', () => {
    payProgress.style.height = `${(1 - payCountDowner.progress()) * 100}%`;
    pay.innerHTML = payCountDowner.formatLast();
  });
  payCountDowner.on('stop', () => {
    payProgress.style.height = `${(1 - payCountDowner.progress()) * 100}%`;
  });
  const lostCountDowner = new CountDowner(lostDate);
  lost.innerHTML = lostCountDowner.formatLast();
  lostOn.innerHTML = lostCountDowner.formatTill();
  lostCountDowner.on('second', () => {
    lostProgress.style.height = `${(1 - lostCountDowner.progress()) * 100}%`;
    lost.innerHTML = lostCountDowner.formatLast();
  });
  lostCountDowner.on('stop', () => {
    lostProgress.style.height = `${(1 - lostCountDowner.progress()) * 100}%`;
  });
}
