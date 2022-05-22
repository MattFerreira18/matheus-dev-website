import { useContext, useEffect, useState } from 'react';

import { MouseContext } from '../contexts/MouseContext';

interface MousePosition {
  x?: number;
  y?: number;
}

function useMouse() {
  const { cursorModel, changeCursorModel } = useContext(MouseContext);
  const [position, setPosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  function getPosition() {
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

  return { cursorModel, changeCursorModel, getPosition };
}

export default useMouse;
