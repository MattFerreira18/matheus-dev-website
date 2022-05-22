function useMobileDevice() {
  const mobileSystems = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ];

  const isMobileSystem = mobileSystems.some((system) =>
    navigator.userAgent.match(`/${system}/i`),
  );

  const maxWindowMobileLength = 720;
  const width = window.innerWidth;

  return isMobileSystem || width < maxWindowMobileLength;
}

export default useMobileDevice;
