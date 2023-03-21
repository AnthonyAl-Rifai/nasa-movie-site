import Head from 'next/head';
import HomeContainer from '@/containers/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>IMDB & NASA Challenge</title>
        <meta name="description" content="IMDB & NASA results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </>
  );
}
