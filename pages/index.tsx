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

type Genre = {
  id: number;
  name: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_countries: ProductionCountry[];
  release_date: string;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
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
  nasa: NasaResponse | null;
  movies: MoviesResponse | null;
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
  let nasa: NasaResponse | null = null;
  let movies: MoviesResponse | null = null;

  try {
    const [nasaResponse, moviesResponse] = await Promise.all([
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&query=NASA&include_adult=false&1`
      ),
    ]);

    nasa = await nasaResponse.json();
    movies = await moviesResponse.json();
    return {
      props: {
        nasa,
        movies,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        nasa: null,
        movie: null,
      },
    };
  }
};
