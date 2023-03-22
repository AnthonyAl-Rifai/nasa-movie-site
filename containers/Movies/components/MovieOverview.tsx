import { GridItem, Heading, Text, Box } from '@chakra-ui/react';
import { convertRuntime } from '@/utils';
import type { MoviesProps } from '@/pages/movies/[id]';

export const MovieOverview = ({ movie }: MoviesProps) => {
  if (!movie) {
    return null;
  }
  return (
    <GridItem colSpan={3} rowSpan={2}>
      <Heading>{movie.title}</Heading>
      <Text fontWeight="bold" color="#888888">
        {movie.tagline}
      </Text>
      <Text>
        {movie.release_date
          ? `${movie.release_date.slice(0, 4)} · ${convertRuntime(
              movie.runtime
            )}`
          : ''}
      </Text>
      <Text>
        {movie.genres.map((genre) => (
          <span key={genre.id}>{genre.name} · </span>
        ))}
      </Text>
      <Box marginTop="30px">
        {movie.overview ? <Heading size="lg">Overview</Heading> : null}
        <Text fontWeight="bold">{movie.overview}</Text>
      </Box>
    </GridItem>
  );
};
