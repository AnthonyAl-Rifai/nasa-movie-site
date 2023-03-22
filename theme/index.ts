import { extendTheme } from '@chakra-ui/react';
import global from './global';
import Card from './cards';
import Button from './buttons';

const customTheme = extendTheme({
  styles: {
    global,
  },
  components: {
    Card,
    Button,
  },
});

export default customTheme;
