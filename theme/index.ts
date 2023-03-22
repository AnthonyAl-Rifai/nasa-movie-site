import { extendTheme } from '@chakra-ui/react';
import global from './global';
import Card from './cards';

const customTheme = extendTheme({
  styles: {
    global,
  },
  components: {
    Card,
  },
});

export default customTheme;
