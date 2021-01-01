import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import '../styles/prism-a11y-dark.css';
import { Router } from 'next/router';

import { GTMPageView } from '../utils/gtm';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
