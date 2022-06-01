import { useContext, useEffect, useState } from 'react';

import { CursorContext } from '../contexts/CursorContext';

interface CursorPosition {
  x?: number;
  y?: number;
}

function useCursor() {
  const { cursorModel, onChangeCursorModel } = useContext(CursorContext);
  const [position, setPosition] = useState<CursorPosition>({
    x: null,
    y: null,
  });

  function getCursorPosition() {
    return { positionX: position.x, positionY: position.y };
  }

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { cursorModel, onChangeCursorModel, getCursorPosition };
}

export default useCursor;
