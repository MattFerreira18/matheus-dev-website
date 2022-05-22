import styled from '../../../styles';

export const Container = styled('section', {
  height: '23.2rem',
  maxWidth: '1200px',

  marginX: 'auto',
  marginTop: '2rem',
  paddingY: '2rem',

  background: '$black900',

  zIndex: '-9',

  '@mobile': {
    height: '72rem',
  },

  '& > div': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$black900',

  '@tablet': {
    paddingLeft: '1.2rem',
  },

  '@mobile': {
    paddingX: '2rem',
    flexDirection: 'column',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  background: '$black900',

  textAlign: 'center',
  fontSize: '$xlarge',
});
