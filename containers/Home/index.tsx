import { Box, Container } from '@chakra-ui/react';
import type { HomeProps } from '@/pages';

const Home = ({ nasa, movies }: HomeProps) => {
  console.log(nasa);
  console.log(movies);

  return (
    <Box as="main" minHeight="100vh">
      <Container>
        <h1>nasa picture</h1>
      </Container>
      <Container>
        <h2>movie list</h2>
      </Container>
    </Box>
  );
};

export default Home;
