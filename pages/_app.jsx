import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="font-mono">
      <Component {...pageProps} />
    </div>
  );
}
