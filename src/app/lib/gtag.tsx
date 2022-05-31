import Script from 'next/script';

import ANALYTICS_CONFIG from '../constants/analytics';

function GtagScript() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.PUBLIC_KEY}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_CONFIG.PUBLIC_KEY}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  );
}

function pageview(url: string) {
  if (typeof window?.gtag !== 'undefined') {
    window?.gtag('config', ANALYTICS_CONFIG.PUBLIC_KEY, {
      page_path: url,
    });
  }
}

const gtag = {
  Scripts: GtagScript,
  pageview,
};

export default gtag;
