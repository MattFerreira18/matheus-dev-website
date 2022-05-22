import styled from '../../../styles';

export const Container = styled('section', {
  height: '27.25rem',
  maxWidth: '1200px',

  marginX: 'auto',
  marginTop: '2rem',
  paddingY: '2rem',

  // zIndex: '-5',

  background: '$black900',

  '@mobile': {
    height: '68rem',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$black900',

  '@tablet': {
    paddingX: '2rem',
  },

  '@mobile': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
