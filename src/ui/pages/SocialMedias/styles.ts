import styled from '../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',

  marginX: 'auto',
  marginY: '$32',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Wrapper = styled('div', {
  '& > div': {
    width: '1200px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // '@tablet': {
  //   paddingLeft: '1.2rem',
  // },

  // '@mobile': {
  //   paddingX: '2rem',
  //   flexDirection: 'column',
  // },
});

export const Title = styled('h2', {
  marginBottom: '$16',

  textAlign: 'center',
  fontSize: '$xl',
  color: '$gray100',
});
