import styled from '../../../../styles';

export const Container = styled('div', {
  height: '12rem',
  width: '22rem',

  marginY: '1rem',
  padding: '2rem',

  border: '1px solid $black800',
  borderRadius: '0.5rem',
  background: 'none',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  transition: '250ms',

  '&:hover': {
    background: '$black800',
    color: '$gray50',

    '& a': {
      color: '$gray50',
    },
  },

  '@tablet': {
    width: '16rem',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
    height: '14rem',
  },

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const Title = styled('h3', {
  marginBottom: '0.2rem',

  fontSize: '$large',
  fontWeight: 'bold',
  fontFamily: '$body',
  letterSpacing: '0.8px',

  textAlign: 'center',
});
