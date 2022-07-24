/* eslint-disable react/no-danger */
import type { NextPage } from 'next';
import type { DocumentProps } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

import CssHelper from '../ui/components/Scripts/CssHelper';

const MyDocument: NextPage<DocumentProps> = () => (
  <Html>
    <Head>
      <CssHelper />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
