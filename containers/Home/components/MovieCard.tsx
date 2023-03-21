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
} from '@chakra-ui/react';
import type { Movie } from '@/pages';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <LinkBox>
      <Card minH="4xl" align="center" padding="10px">
        <Box>
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original///${movie.poster_path}`}
              alt={movie.original_title}
              borderRadius="md"
            />
          ) : null}
        </Box>
        <LinkOverlay href={`/movies/${movie.id}`}>
          <CardHeader>
            <Heading as="h2" size="md">
              {movie.original_title}
            </Heading>
          </CardHeader>
        </LinkOverlay>

        <CardBody>
          <Heading as="h4" size="sm">
            Description:
          </Heading>
          <Text fontSize="sm">{movie.overview}</Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>Release Date: {movie.release_date}</Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default MovieCard;
