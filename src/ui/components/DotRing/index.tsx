import { useEffect, useState } from 'react';

import useMobileDevice from '../../../app/hooks/useMobileDevice';
import useMouse from '../../../app/hooks/useMouse';
import { Dot, Ring } from './styles';

function DotRing() {
  const { cursorModel, getPosition } = useMouse();
  const [customCursorIsActive, setCustomCursorIsActive] = useState(true);

  const { positionX, positionY } = getPosition();

  useEffect(() => {
    setCustomCursorIsActive(!useMobileDevice());
  }, []);

  if (!customCursorIsActive) {
    return null;
  }

  return (
    <>
      <Dot
        style={{ left: `${positionX}px`, top: `${positionY}px` }}
        className={cursorModel}
      />
      <Ring
        style={{ left: `${positionX}px`, top: `${positionY}px` }}
        className={cursorModel}
      />
    </>
  );
}

export default DotRing;
