import styled from '../../../styles';

export const Container = styled('section', {
  height: '55rem',
  maxWidth: '1300px',

  marginX: 'auto',
  marginTop: '2rem',
  paddingTop: '2rem',

  background: '$black900',

  zIndex: '-8',

  '@tablet': {
    maxWidth: '1200px',
  },

  '@mobile': {
    height: '168rem',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  hr: {
    height: '1px',
    maxWidth: '1200px',

    background: '$black800',

    border: 'none',
    margin: '2rem auto 0',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

export const Wrapper = styled('div', {
  width: '100%',

  background: '$black900',

  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',

  '@mobile': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    paddingX: '2rem',
  },
});
