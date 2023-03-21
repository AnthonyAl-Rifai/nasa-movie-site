import Head from 'next/head';
import HomeContainer from '@/containers/Home';
import { GetServerSideProps } from 'next';

export interface NasaResponse {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface HomeProps {
  nasa?: NasaResponse;
  movies?: MoviesResponse;
}

export default function Home({ nasa, movies }: HomeProps) {
  return (
    <>
      <Head>
        <title>IMDB & NASA Challenge</title>
        <meta name="description" content="IMDB & NASA results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer nasa={nasa} movies={movies} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let nasa: NasaResponse | undefined;
  let movies: MoviesResponse | undefined;

  try {
    const nasaResponse = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );
    nasa = await nasaResponse.json();
  } catch (error) {
    console.error(error);
  }

  try {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&query=NASA&include_adult=false&1`
    );
    movies = await moviesResponse.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      nasa,
      movies,
    },
  };
};
