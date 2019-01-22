import React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import Idle from './Idel';

function Ubuntu() {
  const [password, setPassword] = useState('');
  const [hint, setHint] = useState('');
  const [time, setTime] = useState('');
  const [dateString, setDateString] = useState('');
  const [isIdle, setIdle] = useState(false);
  const ref = useRef();
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  function onSubmit() {
    setHint('Wrong password!');
  }
  function onPasswordClear() {
    setPassword('');
  }
  function onActive() {
    console.log('activate');
    setIdle(!isIdle);
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.onclick = onActive;
      ref.current.onkeydown = onActive;
    }
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateString(date.toLocaleDateString());
      setTime(date.getSeconds());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        fontFamily: 'Ubuntu',
        height: '100%',
      }}
    >
      <Login
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

export default Ubuntu;
