import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='dark' lang='en'>
      <Head>
        <meta property='og:title' content='MDST' key='title' />
      </Head>
      <body className='text-grey-dark dark:text-white bg-white-100 dark:bg-grey-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
