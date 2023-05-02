import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta property='og:title' content='MDST' key='title' />
      </Head>
      <body className='text-blue-950 dark:text-white bg-blue-100 dark:bg-blue-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
