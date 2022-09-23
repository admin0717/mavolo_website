import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Head>
        <meta
          name="google-site-verification"
          content="q7zEgAze2nizXNJs4e0X0HaWTQzWpbc2Hs4QiaXtWS8"
          key="google-site-verification"
        />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MBFKXHJVG3"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
        
        gtag('config', 'G-MBFKXHJVG3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
