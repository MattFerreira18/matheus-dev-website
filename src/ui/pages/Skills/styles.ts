import styled from '../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',

  marginX: 'auto',
  marginY: '$32',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  // '@tablet': {
  //   maxWidth: '1200px',
  // },

  // '@mobile': {
  //   height: '168rem',
  // },
});

export const Title = styled('h2', {
  marginBottom: '$16',

  textAlign: 'center',
  fontSize: '$xl',
  color: '$gray100',
});

export const Wrapper = styled('div', {
  '& > div': {
    width: '1200px',

    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  },

  // '@mobile': {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',

  //   paddingX: '2rem',
  // },
});
