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

function useScrollEnd(distanceFromEnd = 250) {
  const [isNearEnd, setIsNearEnd] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (offsetHeight - (scrollTop + clientHeight) <= distanceFromEnd) {
        setIsNearEnd(true);
      } else {
        setIsNearEnd(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distanceFromEnd]);

  return { isNearEnd, setIsNearEnd };
}

const Home = ({ nasa, movies: initialMovies }: HomeProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(initialMovies?.results || []);
  const { isNearEnd, setIsNearEnd } = useScrollEnd();

  const fetchMovies = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetch(`/api/search?page=${page + 1}`);
      const results: MoviesResponse | undefined = await response.json();
      const newMovies: Movie[] = [...movies, ...(results?.results || [])];
      setMovies(newMovies);
      setPage(page + 1);
      setIsFetching(false);
      setIsNearEnd(false);
    } catch (error) {
      setIsFetching(false);
      console.error(error);
    }
  }, [page, movies, setIsNearEnd]);

  useEffect(() => {
    if (isFetching) return;
    if (isNearEnd) {
      fetchMovies();
    }
  }, [isNearEnd, isFetching, fetchMovies]);

  const today: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

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
