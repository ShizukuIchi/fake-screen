import { useEffect, useState } from 'react';

function useDrag(ref) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const previousOffset = { ...offset };
    let originMouseX;
    let originMouseY;
    function onMousemove(e) {
      const { pageX, pageY } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const y = pageY - originMouseY + previousOffset.y;
      setOffset({ x, y });
    }
    function onMouseup(e) {
      previousOffset.x += e.pageX - originMouseX;
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onMousemove);
      window.removeEventListener('mouseup', onMouseup);
    }
    function onMousedown(e) {
      originMouseX = e.pageX;
      originMouseY = e.pageY;
      window.addEventListener('mousemove', onMousemove);
      window.addEventListener('mouseup', onMouseup);
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
