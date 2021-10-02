import { styled } from '@stitches/react';

export const Button = styled('button', {
  borderRadius: 99999,
  fontSize: '$4',
  padding: '$2 $3',
  cursor: 'pointer',
  variants: {
    color: {
      teal: {
        border: '2px solid $teal400',
        '&:hover': {
          backgroundColor: '$teal400',
          color: '$gray200',
        },
      },
      orange: {
        border: '2px solid $orange400',
        '&:hover': {
          backgroundColor: '$orange400',
          color: '$gray200',
        },
      },
      purple: {
        border: '2px solid $purple600',
        '&:hover': {
          backgroundColor: '$purple600',
          color: '$gray200',
        },
      },
    },
  },
  defaultVariants: {
    color: 'purple',
  },
});
