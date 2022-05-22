import styled from '../../../styles';

export const MenuButton = styled('button', {
  borderRadius: '0.5rem',
  background: '$black900',

  fontSize: '$large',

  size: '2.4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&.active': {
    background: '$black800',
  },

  '&:hover': {
    background: '$black800',
  },

  svg: {
    color: '$red500',
  },

  '@mobile': {
    fontSize: '$xlarge',
    size: '2.6rem',
  },

  '@min-mobile': {
    size: '2.4rem',
    fontSize: '$large',
  },
});

export const Modal = styled('div', {
  width: '100vw',
  height: '100vh',

  background: 'rgba(0,0,0,0.2)',

  position: 'fixed',
  inset: 0,
  zIndex: '9999',
});

export const Wrapper = styled('div', {
  margin: '0 auto',
  paddingLeft: '2rem',

  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,

  // border: '1px solid green',

  // height: '100%',
  width: '100%',
});

export const ArrowUp = styled('div', {
  size: 0,
  alignSelf: 'end',

  marginRight: '1.5rem',
  marginTop: '4rem',

  borderX: '10px solid transparent',
  borderBottom: '10px solid $black800',
});

export const Content = styled('div', {
  background: '$black800',
  width: '100%',

  borderRadius: '0.5rem',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  '@mobile': {
    marginRight: '1rem',
  },
});
