import { useRef, useEffect } from 'react';

const useTimeout = (ms, callback) => {
  const timeoutRef = useRef();
  function start() {
    timeoutRef.current = setTimeout(callback, ms);
  }
  function clear() {
    clearTimeout(timeoutRef.current);
  }
  function reset() {
    clear();
    start();
  }
  useEffect(() => {
    start();
    return clear;
  }, []);

  return reset;
};

export default useTimeout;
