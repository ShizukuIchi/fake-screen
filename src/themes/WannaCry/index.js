import React, { useEffect, useState } from 'react';

import { CountDowner, twoDigits } from 'src/lib';
import WannaCryWindow from './WannaCryWindow';

function WannaCry({ raise, lose, history }) {
  const [raiseDeadline] = useState(
    formatDeadline(offsetDate(new Date(), raise)),
  );
  const [loseDeadline] = useState(formatDeadline(offsetDate(new Date(), lose)));
  const [remainRaiseTime, setRemainRaiseTime] = useState(formatDisplay(raise));
  const [remainLoseTime, setRemainLoseTime] = useState(formatDisplay(lose));
  const [payment, setPayment] = useState(300);
  const [raiseProgress, setRaiseProgress] = useState(formatProgress(0));
  const [loseProgress, setLoseProgress] = useState(formatProgress(0));

  function onCheck() {
    alert(`You didn't pay!\nYour files will be lost on ${loseDeadline}!`);
  }
  function onDecrypt() {
    alert(`Decrypt failed!\nPlease click <Contact Us>!`);
  }
  function onCopy() {
    try {
      document.execCommand('copy');
    } catch {
    } finally {
      alert('Content copied Successfully!');
    }
  }
  function onExit() {
    history.push('/');
  }
  useEffect(() => {
    const now = new Date();
    const raiseTime = offsetDate(now, raise);
    const loseTime = offsetDate(now, lose);
    const raiseTimer = new CountDowner(raiseTime);
    const loseTimer = new CountDowner(loseTime);
    raiseTimer.on('second', arr => {
      setRemainRaiseTime(formatDisplay(arr));
      setRaiseProgress(formatProgress(raiseTimer.progress()));
    });
    loseTimer.on('second', arr => {
      setRemainLoseTime(formatDisplay(arr));
      setLoseProgress(formatProgress(loseTimer.progress()));
    });
    raiseTimer.on('stop', () => {
      setPayment(600);
      setRaiseProgress(formatProgress(raiseTimer.progress()));
    });
    loseTimer.on('stop', () => {
      setLoseProgress(formatProgress(loseTimer.progress()));
    });
    setRemainRaiseTime(formatDisplay(raiseTimer.getLast()));
    setRemainLoseTime(formatDisplay(loseTimer.getLast()));
    document.addEventListener('copy', setClipboardData);

    return () => {
      document.removeEventListener('copy', setClipboardData);
      raiseTimer.clear();
      loseTimer.clear();
    };
  }, []);
  return (
    <div
      style={{
        height: '100%',
        background: '#000',
      }}
    >
      <WannaCryWindow
        remainLoseTime={remainLoseTime}
        remainRaiseTime={remainRaiseTime}
        raiseProgress={raiseProgress}
        loseProgress={loseProgress}
        payment={payment}
        onDecrypt={onDecrypt}
        onCheck={onCheck}
        onCopy={onCopy}
        onExit={onExit}
        raiseDeadline={raiseDeadline}
        loseDeadline={loseDeadline}
      />
    </div>
  );
}

export function formatDisplay(array) {
  return array.map(twoDigits).join(':');
}

export function formatProgress(p) {
  return `${p * 100}%`;
}
export function offsetDate(now, array) {
  const date = new Date();
  date.setDate(now.getDate() + array[0]);
  date.setHours(now.getHours() + array[1]);
  date.setMinutes(now.getMinutes() + array[2]);
  date.setSeconds(now.getSeconds() + array[3]);
  return date;
}
export function formatDeadline(date) {
  const y = date.getFullYear();
  const M = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const dateStr = [M, d, y].map(twoDigits).join('/');
  const timeStr = [h, m, s].map(twoDigits).join(':');
  return `${dateStr} ${timeStr}`;
}

export function setClipboardData(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData(
      'text/plain',
      'Money! Give me Money! ლ(́◉◞౪◟◉‵ლ)',
    );
  }
}

WannaCry.defaultProps = {
  raise: [0, 0, 10, 0],
  lose: [0, 1, 0, 0],
};

export default WannaCry;
