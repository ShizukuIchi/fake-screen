import 'babel-polyfill';
import CountDowner from '../assets/CountDowner.js';
import './wannacry.scss';
import wannacry from './wannacry.pug';

export const render = () => {
  setTimeout(start);
  return wannacry;
};

function start() {
  const payOn = document.querySelector('#pay-on');
  const payProgress = document.querySelector('#pay-progress');
  const payment = document.querySelector('#payment');
  const lost = document.querySelector('#lost');
  const lostOn = document.querySelector('#lost-on');
  const lostProgress = document.querySelector('#lost-progress');
  const check = document.querySelector('#check');
  const decrypt = document.querySelector('#decrypt');
  const copy = document.querySelector('#copy');

  const now = new Date();
  const payDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes() + 10,
    now.getSeconds(),
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
    try {
      document.querySelector('#pay-progress').style.height = `${(1 -
        payCountDowner.progress()) *
        100}%`;
      document.querySelector('#pay').innerHTML = payCountDowner.formatLast();
    } catch (e) {
      payCountDowner.stop();
    }
  });
  payCountDowner.on('stop', () => {
    payProgress.style.height = `${(1 - payCountDowner.progress()) * 100}%`;
    payment.innerHTML = '$600';
  });
  const lostCountDowner = new CountDowner(lostDate);
  lost.innerHTML = lostCountDowner.formatLast();
  lostOn.innerHTML = lostCountDowner.formatTill();
  lostCountDowner.on('second', () => {
    try {
      document.querySelector('#lost').innerHTML = lostCountDowner.formatLast();
      document.querySelector('#lost-progress').style.height = `${(1 -
        lostCountDowner.progress()) *
        100}%`;
    } catch (e) {
      lostCountDowner.stop();
    }
  });
  lostCountDowner.on('stop', () => {
    lostProgress.style.height = `${(1 - lostCountDowner.progress()) * 100}%`;
  });

  check.onclick = () => {
    alert(
      `You didn't pay!\nYour files will be lost on ${lostCountDowner.formatTill()}!`,
    );
  };
  decrypt.onclick = () => {
    alert(`Decrypt failed!\nPlease click <Contact Us>!`);
  };
  copy.onclick = function(e) {
    document.addEventListener('copy', setClipboardData);
    document.execCommand('copy');
    alert('Content copied Successfully!');
  };
}

function setClipboardData(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData(
      'text/plain',
      'Money! Give me Money! ლ(́◉◞౪◟◉‵ლ)',
    );
  }
  document.removeEventListener('copy', setClipboardData);
}
