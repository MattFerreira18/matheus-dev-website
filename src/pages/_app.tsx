import { DefaultSeo } from 'next-seo';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import seo from '../app/constants/seo';
import CursorProvider from '../app/contexts/CursorContext';
import gtag from '../app/lib/gtag';
import { Layout } from '../ui/Layout';
import { globalStyles } from '../ui/styles/global';

export function reportWebVitals(data: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === 'development') {
    console.log('🌐 - web vitals report:', data);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  globalStyles();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

    return () => {
      router.events.off('routeChangeComplete', (url) => gtag.pageview(url));
    };
  }, [router.events]);

  return (
    <CursorProvider>
      <DefaultSeo {...seo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CursorProvider>
  );
}

export default MyApp;
