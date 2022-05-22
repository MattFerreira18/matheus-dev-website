import styled, { keyframes } from '../../../styles';

const translatePopover = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
});

export const Container = styled('div', {
  minWidth: '$56',
  minHeight: '$56',

  position: 'relative',
  justifySelf: 'center',

  '&:not(:first-child)': {
    marginTop: '$4',
  },

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

  // '@mobile': {
  //   bottom: 'calc(100% - 120px)',
  // },
});

export const ArrowDown = styled('div', {
  size: 0,

  marginLeft: '$24',
  marginTop: '0.4rem',

  borderX: '10px solid transparent',
  borderTop: '10px solid $gray400',

  // '@mobile': {
  //   marginTop: '0',
  //   marginLeft: '46%',
  // },
});

export const Content = styled('div', {
  width: '14rem',
  height: '10rem',

  borderRadius: '$md',
  background: '$gray400',

  padding: '$4',

  letterSpacing: '0.4px',
  lineHeight: '1.4',
  fontSize: '$sm',

  transform: 'scale(1.1)',

  '@mobile': {
    width: '100%',
    height: '10rem',

    fontSize: '$medium',

    transform: 'scale(1.0)',
  },
});
