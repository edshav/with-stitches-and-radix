import { styled } from '../styles/stitches.config';

export const ResponsiveBoxVariants = styled('div', {
  variants: {
    color: {
      orange: { backgroundColor: '$orange600' },
      purple: { backgroundColor: '$purple600' },
      teal: { backgroundColor: '$teal600' },
    },
  },
});
