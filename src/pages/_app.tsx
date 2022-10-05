/* eslint-disable @typescript-eslint/default-param-last */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import ThemeProvider from "../theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
