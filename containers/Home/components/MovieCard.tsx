import {
  Card,
  CardBody,
  Text,
  Heading,
  Image,
  Box,
  LinkOverlay,
  LinkBox,
  CardHeader,
  Highlight,
} from '@chakra-ui/react';
import type { Movie } from '@/pages';
import { truncate } from '@/utils';
const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <LinkBox height="100%">
      <Card height="100%">
        <Box>
          <Image
            src={`https://image.tmdb.org/t/p/original///${movie.poster_path}`}
            alt={movie.original_title}
            borderRadius="md"
            boxSize="sm"
            fallbackSrc="/poster-not-found.png"
          />
        </Box>
        <CardHeader>
          <Heading as="h2" size="md">
            <LinkOverlay href={`/movies/${movie.id}`}>
              {movie.original_title}
            </LinkOverlay>
          </Heading>
        </CardHeader>

        <CardBody>
          {movie.overview ? (
            <Box>
              <Heading as="h4" size="sm">
                Description:
              </Heading>
              <Text fontSize="sm">{truncate(movie.overview)}</Text>
            </Box>
          ) : null}

          <Text marginTop="5px">
            <Highlight query="Popularity:" styles={{ fontWeight: 'bold' }}>
              {`Popularity: `}
            </Highlight>
            {movie.popularity}
          </Text>
          <Text>
            <Highlight query="Release Date:" styles={{ fontWeight: 'bold' }}>
              {`Release Date: `}
            </Highlight>
            {movie.release_date}
          </Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default MovieCard;
