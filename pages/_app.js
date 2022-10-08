import "../styles/globals.scss";
import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#5A37BD"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default wrapper.withRedux(App);
