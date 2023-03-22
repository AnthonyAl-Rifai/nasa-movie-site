import Head from 'next/head';
import MoviesContainer from '@/containers/Movies';
import { GetServerSideProps } from 'next';
import type { Movie } from '..';
import { ParsedUrlQuery } from 'querystring';

interface QueryParams extends ParsedUrlQuery {
  id: string;
}

export interface MoviesProps {
  movie: Movie | null;
}

export default function Movies({ movie }: MoviesProps) {
  return (
    <>
      <Head>
        <title>{movie?.title || 'Uh Oh!'}</title>
        <meta
          name="description"
          content={movie?.overview || 'Movie not found'}
        />
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
  const { id } = context.params || {};
  let movie: Movie | null = null;
  try {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_DB_KEY}&language=en-US`
    );
    const result = await moviesResponse.json();
    // the response returns an object with a success property only when an error occurs
    if (result.success !== false) movie = result;
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: null,
      },
    };
  }
};
