import styled from '../../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',
  height: '21.25rem',

  marginX: 'auto',
  marginY: '2rem',
  paddingY: '2rem',

  // zIndex: '-7',

  borderBottom: '1px solid $black800',

  '@mobile': {
    height: '56rem',
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
    flexDirection: 'column',
  },
});
