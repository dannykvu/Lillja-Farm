import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GoogleAnalytics trackPageViews gaMeasurementId={config.GA_MEASUREMENT_ID} /> */}
      <Component {...pageProps} />
    </>
  );
}
