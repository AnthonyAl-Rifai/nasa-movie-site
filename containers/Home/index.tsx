import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  SimpleGrid,
  GridItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import type { HomeProps } from '@/pages';
import MovieCard from './components/MovieCard';

const Home = ({ nasa, movies }: HomeProps) => {
  console.log(nasa);
  console.log(movies);

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
      <Container maxW="container.xl">
        <Heading>NASA: Picture of the Day</Heading>
        <Text>{formattedDate}</Text>
        <Image src={nasa?.hdurl} alt={nasa?.title} />
      </Container>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="250px" spacing="25px" margin="sm">
          {movies
            ? movies.results.map((movie) => {
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
