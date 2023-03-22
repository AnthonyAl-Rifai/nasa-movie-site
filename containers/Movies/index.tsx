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
                {movie.imdb_id ? (
                  <Button width="100%">View on IMDB</Button>
                ) : null}
              </Link>
            </Box>
          </GridItem>

          <GridItem colSpan={3} rowSpan={2}>
            <Heading>{movie.title}</Heading>
            <Text fontWeight="bold" color="#888888">
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
            <Box marginTop="30px">
              {movie.overview ? <Heading size="lg">Overview</Heading> : null}
              <Text fontWeight="bold">{movie.overview}</Text>
            </Box>
          </GridItem>

          <GridItem colSpan={5}>
            <Box>
              <Heading size="lg">Details</Heading>
            </Box>
            <Box display="flex" justifyContent="space-between" py="5px">
              <Box>
                <Text>
                  <Highlight
                    query="Vote Average"
                    styles={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {`Vote Average: `}
                  </Highlight>
                  {movie.vote_average}
                </Text>
                <Text>
                  <Highlight
                    query="Total Votes:"
                    styles={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {`Total Votes: `}
                  </Highlight>
                  {movie.vote_count}
                </Text>
                <Text>
                  <Highlight
                    query="Budget:"
                    styles={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {`Budget: `}
                  </Highlight>
                  {movie.budget ? movie.budget : 'Unknown'}
                </Text>
              </Box>
              <Box>
                {movie.production_countries.length ? (
                  <Text fontWeight="bold">Country of Production</Text>
                ) : null}
                <UnorderedList listStyleType="none" margin="0px">
                  {movie.production_countries.map((country) => (
                    <ListItem key={country.iso_3166_1}>{country.name}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Box>
                {movie.spoken_languages.length ? (
                  <Text fontWeight="bold">Languages</Text>
                ) : null}
                <UnorderedList listStyleType="none" margin="0px">
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
