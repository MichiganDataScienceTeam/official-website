import Head from "next/head";

export default function HeadContent({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href="/images/favicon.png" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/images/favicon.png" />
            {/* <meta property="og:url" content="URL of your page" /> */}
            <meta property="og:type" content="website" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/images/favicon.png" />
            <meta name="twitter:card" content="summary" />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        </Head>
    )
}