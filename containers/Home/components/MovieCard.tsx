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
      <Card>
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
