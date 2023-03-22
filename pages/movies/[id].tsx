import Head from 'next/head';
import MoviesContainer from '@/containers/Movies';
import { GetServerSideProps } from 'next';
import type { Movie } from '..';
import { ParsedUrlQuery } from 'querystring';

interface QueryParams extends ParsedUrlQuery {
  id: string;
}

export interface MoviesProps {
  movie?: Movie;
}

export default function Movies({ movie }: MoviesProps) {
  return (
    <>
      <Head>
        <title>current movie</title>
        <meta name="description" content="description of current movie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoviesContainer movie={movie} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  MoviesProps,
  QueryParams
> = async (context) => {
  console.log('hello from movies');
  const { id } = context.params || {};
  let movie: Movie | undefined;
  try {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_DB_KEY}&language=en-US`
    );
    movie = await moviesResponse.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      movie,
    },
  };
};
