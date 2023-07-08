import "@/styles/globals.css";
import "../shared/icons";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
