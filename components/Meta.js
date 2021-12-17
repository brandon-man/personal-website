import Head from 'next/head'

function Meta({
  title = 'Brandon Man',
  description = 'My personal website built with Next.js and Chakra UI',
}) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
    </>
  )
}

export default Meta