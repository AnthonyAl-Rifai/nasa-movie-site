import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import type { HomeProps, MoviesResponse, Movie } from '@/pages';
import MovieCard from './components/MovieCard';
import { useState, useEffect, useCallback } from 'react';
import { useScrollEnd } from '@/hooks/useScrollEnd';
import { formattedDate } from '@/utils';

const Home = ({ nasa, movies: initialMovies }: HomeProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(initialMovies?.results || []);
  // custom hook to determine if the user has scrolled near the bottom of the page
  const { isNearEnd, setIsNearEnd } = useScrollEnd();

  const fetchMovies = useCallback(async () => {
    try {
      setIsFetching(true);
      // to prevent api key from being exposed to the client, make an api call to the backend
      const response = await fetch(`/api/search?page=${page + 1}`);
      const results: MoviesResponse | undefined = await response.json();
      // add new movie results to existing movies
      const newMovies: Movie[] = [...movies, ...(results?.results || [])];
      setMovies(newMovies);
      setPage(page + 1);
      setIsFetching(false);
      // to prevent an infinite loop of fetching the next page, setIsNearEnd to false
      setIsNearEnd(false);
    } catch (error) {
      setIsFetching(false);
      console.error(error);
    }
  }, [page, movies, setIsNearEnd]);

  useEffect(() => {
    // fetches the next page of movies from the api/search endpoint when the user is near the bottom of the page
    if (isFetching) return;
    if (isNearEnd) {
      fetchMovies();
    }
  }, [isNearEnd, isFetching, fetchMovies]);

  return (
    <Box as="main">
      <Box
        position="fixed"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        zIndex="-1"
      >
        <Image
          src={nasa?.hdurl}
          alt={nasa?.title}
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          margin="auto"
          minWidth="50%"
          minHeight="50%"
        />
      </Box>
      <Container maxW="container.xl">
        <Box my="30px">
          <Heading>NASA: Picture of the Day</Heading>
          <Text>{formattedDate}</Text>
        </Box>
      </Container>
      <Container maxW="container.xl" marginTop="100vh" paddingBottom="50px">
        <SimpleGrid minChildWidth="250px" spacing="25px" margin="sm">
          {movies
            ? movies.map((movie) => {
                return (
                  <GridItem key={movie.id}>
                    <MovieCard movie={movie} />
                  </GridItem>
                );
              })
            : null}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
