import styled from '../../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',
  height: '16.75rem',

  marginX: 'auto',
  marginY: '2rem',
  paddingTop: '4rem',
  paddingBottom: '2rem',

  zIndex: '-10',

  borderY: '1px solid $black800',

  '@mobile': {
    height: '28rem',
  },

  '@min-mobile': {
    height: '38rem',
  },

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  '& p': {
    marginY: '1rem',

    letterSpacing: '0.8px',
    lineHeight: '1.4',
    fontFamily: '$body',
    fontSize: '$medium',
    textAlign: 'center',

    zIndex: '-1',

    '@tablet': {
      marginX: '2rem',
    },
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});
