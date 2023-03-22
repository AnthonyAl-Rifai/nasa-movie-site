import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variants = {
  solid: defineStyle({
    color: 'black',
    my: '5px',
  }),
};

const buttons = defineStyleConfig({
  variants,
});

export default buttons;
