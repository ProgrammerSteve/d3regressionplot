<<<<<<< HEAD
import '../styles/globals.css';
import { wrapper, store } from '../redux/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
=======
import "../styles/globals.css";
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
>>>>>>> 94694ae (refactored styling and cleaned up code)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

<<<<<<< HEAD
export default wrapper.withRedux(MyApp);
=======
export default wrapper.withRedux(MyApp);
>>>>>>> 94694ae (refactored styling and cleaned up code)
