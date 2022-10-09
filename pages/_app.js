import '../styles/globals.scss';
import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color="#5A37BD" startPosition={0.3} stopDelayMs={200} height={3} />
      <Component {...pageProps} />;
    </>
  );
};

export default myApp;
