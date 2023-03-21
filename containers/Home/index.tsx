import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import type { HomeProps } from '@/pages';

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
    <Box as="main" minHeight="100vh">
      <Container>
        <Heading>NASA: Picture of the Day</Heading>
        <Text>{formattedDate}</Text>
        <Image src={nasa?.hdurl} alt={nasa?.title} />
      </Container>
      <Container>
        <h2>movie list</h2>
      </Container>
    </Box>
  );
};

export default Home;
