import "../styles/globals.scss";
import App from "next/app";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="#5A37BD"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Script
        src={
          "//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6299632177119232"
        }
      />
      <Component {...pageProps} />;
    </>
  );
};

export default myApp;
