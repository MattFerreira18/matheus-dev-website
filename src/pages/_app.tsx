import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Layout from '../ui/components/Layout';
import Topbar from '../ui/components/Topbar';
import { createGlobalStyles } from '../ui/styles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  createGlobalStyles();

  return (
    <>
      <Topbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
