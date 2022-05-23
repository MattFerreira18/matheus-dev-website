import { useEffect, useState } from 'react';

const MAX_MOBILE_WINDOW_WIDTH = 720;
const MOBILE_SYSTEMS = [
  'Android',
  'webOS',
  'iPhone',
  'iPad',
  'iPod',
  'BlackBerry',
  'Windows Phone',
];

function useMobileDevice() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileSystem, setIsMobileSystem] = useState(false);

  useEffect(() => {
    setIsMobileSystem(
      MOBILE_SYSTEMS.some((system) =>
        navigator?.userAgent.match(`/${system}/i`),
      ),
    );

    setInterval(() => {
      setWindowWidth(window.innerWidth);
    }, 800);
  }, []);

  return isMobileSystem || windowWidth < MAX_MOBILE_WINDOW_WIDTH;
}

export default useMobileDevice;
