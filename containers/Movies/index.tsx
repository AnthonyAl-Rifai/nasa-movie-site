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
} from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';

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
    <Box as="main" minHeight="100vh">
      <Container>
        <Image
          src={`https://image.tmdb.org/t/p/original///${movie.poster_path}`}
          alt={movie.title}
          borderRadius="md"
          boxSize="sm"
          fallbackSrc="/poster-not-found.png"
        />
        <Heading>Title: {movie.title}</Heading>
        <Text fontWeight="bold">
          <Highlight query={movie.tagline} styles={{ fontWeight: 'normal' }}>
            {`Tagline: ${movie.tagline}`}
          </Highlight>
        </Text>
        <Text fontWeight="bold">
          <Highlight
            query={movie.overview}
            styles={{ fontWeight: 'normal', color: 'white' }}
          >
            {`Overview: ${movie.overview}`}
          </Highlight>
        </Text>
        <Text>Vote Average: {movie.vote_average}</Text>
        <Text>Total Votes: {movie.vote_count}</Text>
        <Text>Status: {movie.status}</Text>
        <Text>
          IMDB Link:
          <Link
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
          >
            {movie.title}
          </Link>
        </Text>
        <Text>
          Budget: {movie.budget ? movie.budget : 'Unknown budget costs'}
        </Text>
        <Text>Production Countries:</Text>
        <UnorderedList>
          {movie.production_countries.map((country) => (
            <ListItem key={country.iso_3166_1}>{country.name}</ListItem>
          ))}
        </UnorderedList>
        <Text>Genres:</Text>
        <UnorderedList>
          {movie.genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </UnorderedList>
        <Text>Languages:</Text>
        <UnorderedList>
          {movie.spoken_languages.map((language) => (
            <ListItem key={language.iso_639_1}>
              {language.english_name}
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default Movies;
