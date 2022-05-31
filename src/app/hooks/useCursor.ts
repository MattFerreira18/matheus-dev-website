import { useCallback, useContext, useEffect, useState } from 'react';

import { CursorContext } from '../contexts/CursorContext';

interface CursorPosition {
  x?: number;
  y?: number;
}

function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const { cursorModel, onChangeCursorModel } = useContext(CursorContext);

  const handleCursorMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  }, []);

  const getCursorPosition = useCallback(
    () => ({ positionX: position.x, positionY: position.y }),
    [position.x, position.y],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleCursorMove);

    return () => {
      document.removeEventListener('mousemove', handleCursorMove);
    };
  }, []);

  return { cursorModel, onChangeCursorModel, getCursorPosition };
}

export default useCursor;
