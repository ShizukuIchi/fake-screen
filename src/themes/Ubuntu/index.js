import React, { useState, useEffect } from 'react';

import { useTimeout } from 'src/hooks';
import Header from './Header';
import LoginContainer from './LoginContainer';
import Idle from './Idle';
import './style.css';

Ubuntu.defaultProps = {
  hintTimeout: 1500,
  idleTimeout: 5000,
};

function Ubuntu({ hintTimeout, idleTimeout }) {
  const [password, setPassword] = useState('');
  const [hint, setHint] = useState('');
  const [time, setTime] = useState('');
  const [dateString, setDateString] = useState('');
  const [isIdle, setIdle] = useState(false);
  const resetIdleTimeout = useTimeout(idleTimeout, onIdle);
  const resetHintTimeout = useTimeout(hintTimeout, clearHint);
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  function onSubmit() {
    if (!password.length) return;
    setHint('Wrong password!');
    resetHintTimeout();
  }
  function onPasswordClear() {
    setPassword('');
  }
  function onActive() {
    setIdle(false);
    resetIdleTimeout();
  }
  function onIdle() {
    setIdle(true);
  }
  function clearHint() {
    setHint('');
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateString(formatDateStr(date));
      setTime(`${date.getHours()}:${date.getMinutes()}`);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      onClick={onActive}
      onKeyDown={onActive}
      onMouseMove={onActive}
      style={{
        position: 'relative',
        fontFamily: 'Ubuntu',
        height: '100%',
      }}
    >
      <Header />
      <LoginContainer
        onPasswordChange={onPasswordChange}
        password={password}
        hint={hint}
        onSubmit={onSubmit}
        onPasswordClear={onPasswordClear}
      />
      <Idle show={isIdle} time={time} dateString={dateString} />
    </div>
  );
}

export function formatDateStr(date) {
  return `${getDayStr(date.getDay())}, ${getMonthStr(
    date.getMonth(),
  )} ${date.getDate()}`;
}
export function getDayStr(d) {
  return 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(',')[
    d
  ];
}

export function getMonthStr(m) {
  return 'January,February,March,April,May,June,July,August,September,October,November,December'.split(
    ',',
  )[m];
}

export default Ubuntu;
