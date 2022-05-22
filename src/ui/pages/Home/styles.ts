import styled from '../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',
  minHeight: '60vh',

  marginX: 'auto',
  marginY: '$8',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',

  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
});

export const TextWrapper = styled('div', {
  marginLeft: '$16',
  marginBottom: '$24',

  justifySelf: 'initial',

  '@mobile': {
    width: '100%',

    margin: '0',
    marginTop: '4rem',
    padding: '0 2rem',

    textAlign: 'center',
  },

  '.hand-image': {
    width: '1.6rem',
  },

  span: {
    marginLeft: '$2',
    fontSize: '1.2rem',

    '@mobile': {
      fontSize: '$large',
    },
    '@min-mobile': {
      fontSize: '$medium',
    },
  },

  h1: {
    fontSize: '3.2rem',

    '@mobile': {
      fontSize: '2.8rem',
    },
    '@min-mobile': {
      fontSize: '2.2rem',
    },
  },

  'h1 + span': {
    fontSize: '1.4rem',

    '@mobile': {
      fontSize: '$large',
    },
    '@min-mobile': {
      fontSize: '$medium',
    },
  },
});

export const Profile = styled('div', {
  maxWidth: '400px',
  maxHeight: '400px',

  justifySelf: 'center',

  background: '$gray100',
  borderRadius: '$full',

  img: {
    maxWidth: '100%',
    borderRadius: '$full',

    '@mobile': {
      width: 'calc(100vw - 4rem)',
    },
  },
});
