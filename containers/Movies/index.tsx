import { Box, Container } from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';

const Movies = ({ movie }: MoviesProps) => {
  console.log('movie: ', movie);

  return (
    <Box as="main" minHeight="100vh">
      <Container>
        <h1>movie info</h1>
      </Container>
    </Box>
  );
};

export default Movies;
