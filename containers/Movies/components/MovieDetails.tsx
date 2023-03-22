import {
  GridItem,
  Box,
  Heading,
  Text,
  Highlight,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import type { MoviesProps } from '@/pages/movies/[id]';

export const MovieDetails = ({ movie }: MoviesProps) => {
  if (!movie) {
    return null;
  }

  return (
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
  );
};
