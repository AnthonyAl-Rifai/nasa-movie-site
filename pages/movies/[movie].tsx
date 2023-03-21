import Head from 'next/head';
import MoviesContainer from '@/containers/Movies';

export default function Movies() {
  return (
    <>
      <Head>
        <title>current movie</title>
        <meta name="description" content="description of current movie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoviesContainer />
    </>
  );
}
