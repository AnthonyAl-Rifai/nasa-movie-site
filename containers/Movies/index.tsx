import { Box, Container, Image, Heading, Grid } from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';
import { MoviePoster } from './components/MoviePoster';
import { MovieOverview } from './components/MovieOverview';
import { MovieDetails } from './components/MovieDetails';

const Movies = ({ movie }: MoviesProps) => {
  // render error message if movie is not found
  if (!movie) {
    return (
      <Box>
        <Container>
          <Heading py="100px" fontSize="6xl">
            Uh oh! We ran into a problem finding the movie you selected.
          </Heading>
          <Image src="/sad-popcorn.png" alt="sad popcorn" />
        </Container>
      </Box>
    );
  }

  return (
    <Box as="main">
      <Container
        maxW="container.md"
        minHeight="100vh"
        display="grid"
        alignItems="center"
      >
        <Grid
          minH="450px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <MoviePoster movie={movie} />
          <MovieOverview movie={movie} />
          <MovieDetails movie={movie} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Movies;
