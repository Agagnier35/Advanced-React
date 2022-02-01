import { AppProps } from 'next/app';
import React from 'react';
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
