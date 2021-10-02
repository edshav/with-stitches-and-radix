import { styled } from '../stitches.config';

export const ResponsiveBox = styled('div', {
  backgroundColor: '$orange200',
  '@bp1': { backgroundColor: '$orange600' },
  '@bp2': { backgroundColor: '$purple600' },
});
