import { useEffect, useState } from 'react';

import useCursor from '../../../app/hooks/useCursor';
import useMobileDevice from '../../../app/hooks/useMobileDevice';
import { Dot, Ring } from './styles';

function DotRing() {
  const { cursorModel, getCursorPosition } = useCursor();
  const isMobileDevice = useMobileDevice();
  const [customCursorIsActive, setCustomCursorIsActive] = useState(true);
  const { positionX, positionY } = getCursorPosition();

  useEffect(() => {
    setCustomCursorIsActive(!isMobileDevice);
  }, [getCursorPosition()]);

  if (!customCursorIsActive) {
    return null;
  }

  return (
    <>
      <Dot
        style={{
          left: `${positionX}px`,
          top: `${positionY}px`,
        }}
        className={cursorModel}
      />
      <Ring
        style={{
          left: `${positionX}px`,
          top: `${positionY}px`,
        }}
        className={cursorModel}
      />
    </>
  );
}

export default DotRing;
