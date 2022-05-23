import styled from '../../styles';

export const Container = styled('section', {
  maxWidth: '1200px',

  marginX: 'auto',
  marginY: '$32',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Title = styled('h2', {
  marginBottom: '$16',

  textAlign: 'center',
  fontSize: '$xl',
  color: '$gray100',
});

export const Wrapper = styled('div', {
  marginY: '$4',

  '& > div': {
    width: '1200px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});