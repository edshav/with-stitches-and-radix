import { Cross1Icon } from '@radix-ui/react-icons';
import { violet, blackA, mauve } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, ReactNode } from 'react';
import { styled, keyframes } from '../styles/stitches.config';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 300ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeout} 200ms ease-out`,
    },
  },
});

export function Dialog({
  children,
  ...props
}: DialogPrimitive.DialogProps & { children: ReactNode }) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 300ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeout} 200ms ease-out`,
    },
  },
  '&:focus': { outline: 'none' },
});

export const Title = styled(DialogPrimitive.Title, {
  fontWeight: 'bold',
  color: mauve.mauve12,
  fontSize: 17,
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export const DialogContent = forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <StyledCloseButton>
        <Cross1Icon />
      </StyledCloseButton>
    </StyledContent>
  )
);

DialogContent.displayName = 'DialogContent';

export const DialogTrigger = DialogPrimitive.Trigger;
