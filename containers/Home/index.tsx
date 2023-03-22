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
