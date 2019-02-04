import { useState, useEffect } from 'react';

function useDrag(ref) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    let previousOffset = { ...offset };
    let originMouseX;
    let originMouseY;
    function onMousemove(e) {
      const { pageX, pageY } = e;
      setOffset({
        x: pageX - originMouseX + previousOffset.x,
        y: pageY - originMouseY + previousOffset.y,
      });
    }
    function onMousedown(e) {
      originMouseX = e.pageX;
      originMouseY = e.pageY;
      window.addEventListener('mousemove', onMousemove);
      window.addEventListener('mouseup', onMouseup);
    }
    function onMouseup(e) {
      previousOffset.x += e.pageX - originMouseX;
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onMousemove);
      window.removeEventListener('mouseup', onMouseup);
    }
    target.addEventListener('mousedown', onMousedown);
    return () => {
      target.removeEventListener('mousedown', onMousedown);
      window.removeEventListener('mouseup', onMouseup);
      window.removeEventListener('mousemove', onMousemove);
    };
  }, []);
  return offset;
}

export default useDrag;
