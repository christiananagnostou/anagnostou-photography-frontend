import Head from "next/head";

const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta property="og:site_name" content="A Wild Christian" />
    <meta name="og:description" property="og:description" content={props.desc} />
    <meta property="og:url" content={`${props.canonical}`} />
    {props.image && <meta property="og:image" content={`${props.image}`} />}

    <link rel="icon" type="image/png" href="/favicon.jpg" />
    <link rel="apple-touch-icon" href="/favicon.jpg" />

    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta
      name="keywords"
      content="christian anagnostou, anagnostou, san francisco, photography, street photography, fujifilm, san fran, street photographer"
    />
  </Head>
);
export default Meta;
