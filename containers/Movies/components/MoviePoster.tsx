import { GridItem, Box, Image, Link, Button } from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';

export const MoviePoster = ({ movie }: MoviesProps) => {
  if (!movie) {
    return null;
  }

  return (
    <GridItem rowSpan={2} colSpan={2}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          objectFit="contain"
          fallbackSrc="/poster-not-found.png"
          borderRadius="4px"
        />
        <Link
          target="_blank"
          href={`https://www.imdb.com/title/${movie.imdb_id}/`}
          width="100%"
          my="5px"
        >
          {movie.imdb_id ? <Button width="100%">View on IMDB</Button> : null}
        </Link>
      </Box>
    </GridItem>
  );
};
