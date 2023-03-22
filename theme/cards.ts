import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  elevated: definePartsStyle({
    container: {
      bg: '#fffff0',
    },
    header: {},
    body: {},
    footer: {},
  }),
};

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: '10px',
      padding: '10px',
    },
    header: {},
    body: {},
    footer: {},
  }),
};

const cards = defineMultiStyleConfig({
  variants,
  sizes,
});

export default cards;
