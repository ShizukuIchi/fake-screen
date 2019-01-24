import { useRef, useEffect } from 'react';

const useTimeout = (ms = 0, fn = () => {}, args = []) => {
  const timeoutRef = useRef();
  function start() {
    timeoutRef.current = setTimeout(fn.bind(null, args), ms);
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
