import { extendTheme } from '@chakra-ui/react';
import global from './global';

const customTheme = extendTheme({
  styles: {
    global,
  },
});

export default customTheme;
