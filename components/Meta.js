import Head from "next/head";

function Meta({
  title = "Brandon Man",
  description = "My personal website built with Next.js and Chakra UI",
}) {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default Meta;
