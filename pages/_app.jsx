import "@/styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JYRZVN797J"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JYRZVN797J');`}
      </Script>
    </div>
  );
}
