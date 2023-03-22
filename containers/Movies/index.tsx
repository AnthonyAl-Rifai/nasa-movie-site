import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Highlight,
  Grid,
  GridItem,
  Button,
  Divider,
} from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';
import { convertRuntime } from '@/utils';
const Movies = ({ movie }: MoviesProps) => {
  console.log('movie: ', movie);

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
                <Button width="100%">View on IMDB</Button>
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading>{movie.title}</Heading>
            <Text fontWeight="bold" color="gray.600">
              {movie.tagline}
            </Text>
            <Text>
              {movie.release_date.slice(0, 4)} · {convertRuntime(movie.runtime)}
            </Text>
            <Text>
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name} · </span>
              ))}
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            {movie.overview ? <Heading size="lg">Overview</Heading> : null}
            <Text fontWeight="bold">{movie.overview}</Text>
          </GridItem>
          <GridItem colSpan={5}>
            <Box display="flex" justifyContent="space-between" py="5px">
              <Box>
                <Text>Vote Average: {movie.vote_average}</Text>
                <Text>Total Votes: {movie.vote_count}</Text>
                <Text>Budget: {movie.budget ? movie.budget : 'Unknown'}</Text>
              </Box>
              <Box>
                {movie.production_countries.length ? (
                  <Text fontWeight="bold">Country of Production</Text>
                ) : null}
                <UnorderedList>
                  {movie.production_countries.map((country) => (
                    <ListItem key={country.iso_3166_1}>{country.name}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Box>
                {movie.spoken_languages.length ? (
                  <Text fontWeight="bold">Languages</Text>
                ) : null}
                <UnorderedList>
                  {movie.spoken_languages.map((language) => (
                    <ListItem key={language.iso_639_1}>
                      {language.english_name}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Movies;
