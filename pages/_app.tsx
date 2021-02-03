import { AppProps } from "next/app";
import { Auth } from "aws-amplify";
import "../styles/globals.css";

Auth.configure({});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
