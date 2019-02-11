import { useEffect, useState } from 'react';

function useDrag(ref, dragRef, initSize) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(initSize);
  const [hoverPosition, setHoverPosition] = useState('none');
  console.log(hoverPosition);
  useEffect(() => {
    const target = ref.current;
    const dragTarget = dragRef.current;
    if (!target || !dragTarget) return;
    const previousOffset = { ...offset };
    const previousSize = { ...size };
    let originMouseX;
    let originMouseY;

    function onDragging(e) {
      const { pageX, pageY } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const y = pageY - originMouseY + previousOffset.y;
      setOffset({ x, y });
    }
    function onDragEnd(e) {
      previousOffset.x += e.pageX - originMouseX;
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onDragging);
      window.removeEventListener('mouseup', onDragEnd);
    }
    function onDragStart(e) {
      window.addEventListener('mousemove', onDragging);
      window.addEventListener('mouseup', onDragEnd);
    }
    function onDraggingTop(e) {
      const { pageY } = e;
      const { x } = previousOffset;
      const y = pageY - originMouseY + previousOffset.y;
      setOffset({ x, y });
    }
    function onDragEndTop(e) {
      previousOffset.y += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onDraggingTop);
      window.removeEventListener('mouseup', onDragEndTop);
    }
    function onDragStartTop(e) {
      window.addEventListener('mousemove', onDraggingTop);
      window.addEventListener('mouseup', onDragEndTop);
    }
    function onDraggingLeft(e) {
      const { pageX } = e;
      const x = pageX - originMouseX + previousOffset.x;
      const { y } = previousOffset;
      setOffset({ x, y });
    }
    function onDragEndLeft(e) {
      previousOffset.x += e.pageX - originMouseX;
      window.removeEventListener('mousemove', onDraggingLeft);
      window.removeEventListener('mouseup', onDragEndLeft);
    }
    function onDragStartLeft(e) {
      window.addEventListener('mousemove', onDraggingLeft);
      window.addEventListener('mouseup', onDragEndLeft);
    }
    function onResizingRight(e) {
      const { pageX } = e;
      const width = pageX - originMouseX + previousSize.width;
      const { height } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndRight(e) {
      previousSize.width += e.pageX - originMouseX;
      window.removeEventListener('mousemove', onResizingRight);
      window.removeEventListener('mouseup', onResizeEndRight);
    }
    function onResizeStartRight(e) {
      window.addEventListener('mousemove', onResizingRight);
      window.addEventListener('mouseup', onResizeEndRight);
    }
    function onResizingBottom(e) {
      const { pageY } = e;
      const { width } = previousSize;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottom(e) {
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottom);
      window.removeEventListener('mouseup', onResizeEndBottom);
    }
    function onResizeStartBottom(e) {
      window.addEventListener('mousemove', onResizingBottom);
      window.addEventListener('mouseup', onResizeEndBottom);
    }
    function onResizingLeft(e) {
      const { pageX } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const { height } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      window.removeEventListener('mousemove', onResizingLeft);
      window.removeEventListener('mouseup', onResizeEndLeft);
    }
    function onResizeStartLeft(e) {
      window.addEventListener('mousemove', onResizingLeft);
      window.addEventListener('mouseup', onResizeEndLeft);
    }
    function onResizingTop(e) {
      const { pageY } = e;
      const height = -pageY + originMouseY + previousSize.height;
      const { width } = previousSize;
      setSize({ width, height });
    }
    function onResizeEndTop(e) {
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTop);
      window.removeEventListener('mouseup', onResizeEndTop);
    }
    function onResizeStartTop(e) {
      window.addEventListener('mousemove', onResizingTop);
      window.addEventListener('mouseup', onResizeEndTop);
    }
    function onResizingTopLeft(e) {
      const { pageX, pageY } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const height = -pageY + originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndTopLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTopLeft);
      window.removeEventListener('mouseup', onResizeEndTopLeft);
    }
    function onResizeStartTopLeft(e) {
      window.addEventListener('mousemove', onResizingTopLeft);
      window.addEventListener('mouseup', onResizeEndTopLeft);
    }
    function onResizingTopRight(e) {
      const { pageX, pageY } = e;
      const width = pageX - originMouseX + previousSize.width;
      const height = -pageY + originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndTopRight(e) {
      previousSize.width += e.pageX - originMouseX;
      previousSize.height += -e.pageY + originMouseY;
      window.removeEventListener('mousemove', onResizingTopRight);
      window.removeEventListener('mouseup', onResizeEndTopRight);
    }
    function onResizeStartTopRight(e) {
      window.addEventListener('mousemove', onResizingTopRight);
      window.addEventListener('mouseup', onResizeEndTopRight);
    }
    function onResizingBottomLeft(e) {
      const { pageX, pageY } = e;
      const width = -pageX + originMouseX + previousSize.width;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottomLeft(e) {
      previousSize.width += -e.pageX + originMouseX;
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottomLeft);
      window.removeEventListener('mouseup', onResizeEndBottomLeft);
    }
    function onResizeStartBottomLeft(e) {
      window.addEventListener('mousemove', onResizingBottomLeft);
      window.addEventListener('mouseup', onResizeEndBottomLeft);
    }
    function onResizingBottomRight(e) {
      const { pageX, pageY } = e;
      const width = pageX - originMouseX + previousSize.width;
      const height = pageY - originMouseY + previousSize.height;
      setSize({ width, height });
    }
    function onResizeEndBottomRight(e) {
      previousSize.width += e.pageX - originMouseX;
      previousSize.height += e.pageY - originMouseY;
      window.removeEventListener('mousemove', onResizingBottomRight);
      window.removeEventListener('mouseup', onResizeEndBottomRight);
    }
    function onResizeStartBottomRight(e) {
      window.addEventListener('mousemove', onResizingBottomRight);
      window.addEventListener('mouseup', onResizeEndBottomRight);
    }
    function onHoverEnd(e) {
      setHoverPosition('none');
    }
    function onHover(e) {
      if (e.target === dragTarget) return setHoverPosition('header');
      const { offsetX, offsetY } = e;
      const { width, height } = target.getBoundingClientRect();
      if (offsetX < 10) {
        if (offsetY < 10) {
          setHoverPosition('top left');
        } else if (height - offsetY < 10) {
          setHoverPosition('bottom left');
        } else {
          setHoverPosition('left');
        }
      } else if (offsetY < 10) {
        if (width - offsetX < 10) {
          setHoverPosition('top right');
        } else {
          setHoverPosition('top');
        }
      } else if (width - offsetX < 10) {
        if (height - offsetY < 10) setHoverPosition('bottom right');
        else setHoverPosition('right');
      } else if (height - offsetY < 10) {
        setHoverPosition('bottom');
      } else {
        setHoverPosition('none');
      }
    }
    function onMouseDown(e) {
      originMouseX = e.pageX;
      originMouseY = e.pageY;
      if (e.target === dragTarget) return onDragStart(e);
      const { offsetX, offsetY } = e;
      const { width, height } = target.getBoundingClientRect();
      if (offsetX < 10) {
        if (offsetY < 10) {
          onResizeStartTopLeft(e);
          onDragStart(e);
        } else if (height - offsetY < 10) {
          onResizeStartBottomLeft(e);
          onDragStartLeft(e);
        } else {
          onResizeStartLeft(e);
          onDragStartLeft(e);
        }
      } else if (offsetY < 10) {
        if (width - offsetX < 10) {
          onDragStartTop(e);
          onResizeStartTopRight(e);
        } else {
          onResizeStartTop(e);
          onDragStartTop(e);
        }
      } else if (width - offsetX < 10) {
        if (height - offsetY < 10) onResizeStartBottomRight(e);
        else onResizeStartRight(e);
      } else if (height - offsetY < 10) {
        onResizeStartBottom(e);
      }
    }

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseleave', onHoverEnd);
    target.addEventListener('mousemove', onHover);
    return () => {
      target.removeEventListener('mousedown', onMouseDown);
      target.removeEventListener('mousemove', onHover);
      target.removeEventListener('mouseleave', onHoverEnd);
      window.removeEventListener('mousemove', onDraggingLeft);
      window.removeEventListener('mousemove', onDraggingTop);
      window.removeEventListener('mousemove', onDragging);
      window.removeEventListener('mouseup', onDragEndTop);
      window.removeEventListener('mouseup', onDragEndLeft);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('mousemove', onResizingTop);
      window.removeEventListener('mousemove', onResizingRight);
      window.removeEventListener('mousemove', onResizingBottom);
      window.removeEventListener('mousemove', onResizingLeft);
      window.removeEventListener('mousemove', onResizingBottomLeft);
      window.removeEventListener('mousemove', onResizingTopLeft);
      window.removeEventListener('mousemove', onResizingTopRight);
      window.removeEventListener('mousemove', onResizingBottomRight);
      window.removeEventListener('mouseup', onResizeEndTop);
      window.removeEventListener('mouseup', onResizeEndRight);
      window.removeEventListener('mouseup', onResizeEndBottom);
      window.removeEventListener('mouseup', onResizeEndLeft);
      window.removeEventListener('mouseup', onResizeEndBottomLeft);
      window.removeEventListener('mouseup', onResizeEndTopLeft);
      window.removeEventListener('mouseup', onResizeEndTopRight);
      window.removeEventListener('mouseup', onResizeEndBottomRight);
    };
  }, []);
  return { offset, size };
}

export default useDrag;
