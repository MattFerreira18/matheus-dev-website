import styled from '../../../styles';

export const Container = styled('article', {
  marginY: '1rem',
  padding: '2rem',

  border: '1px solid $black800',
  borderRadius: '0.5rem',

  transition: '250ms',

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
  },
});

export const ImageWrapper = styled('div', {
  height: '9.25rem',
  width: '18rem',

  '& img': {
    height: '100%',
    width: '100%',
    borderRadius: '0.3rem',
    objectFit: 'cover',
  },

  '@tablet': {
    width: '12rem',
  },

  '@mobile': {
    width: '100%',
  },
});

export const TextWrapper = styled('div', {
  width: '18.6rem',

  marginTop: '1rem',
  padding: '0.4rem',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '& p': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '@tablet': {
    width: '12rem',
    marginTop: '0',
  },
  '@mobile': {
    width: '100%',
    marginTop: '1.6rem',
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
