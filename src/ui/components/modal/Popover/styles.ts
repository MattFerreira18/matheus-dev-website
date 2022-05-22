import styled, { keyframes } from '../../../styles';

const translatePopover = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
});

export const Container = styled('div', {
  minWidth: '14rem',
  minHeight: '14rem',

  marginY: '1rem',

  position: 'relative',
  justifySelf: 'center',

  '@mobile': {
    width: '100%',
  },
});

export const Wrapper = styled('div', {
  marginBottom: '10.4rem',

  display: 'none',

  position: 'absolute',
  bottom: 'calc(100% - 150px)',

  '&.active': {
    display: 'inline',
    animation: `${translatePopover} 300ms`,
  },

  '@mobile': {
    bottom: 'calc(100% - 120px)',
  },
});

export const ArrowDown = styled('div', {
  size: 0,

  marginLeft: '6rem',
  marginTop: '0.4rem',

  borderX: '10px solid transparent',
  borderTop: '10px solid $black800',

  '@mobile': {
    marginTop: '0',
    marginLeft: '46%',
  },
});

export const Content = styled('div', {
  width: '14rem',
  height: '10rem',

  borderRadius: '0.5rem',
  background: '$black800',

  padding: '1rem',

  letterSpacing: '0.4px',
  lineHeight: '1.4',
  fontFamily: '$body',
  fontSize: '0.825rem',

  transform: 'scale(1.1)',

  '@mobile': {
    width: '100%',
    height: '10rem',

    fontSize: '$medium',

    transform: 'scale(1.0)',
  },
});
