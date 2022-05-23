import styled from '../../../styles';

export const Container = styled('button', {
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: '$4',

  marginRight: '2rem',
  marginBottom: '2rem',

  background: 'none',

  div: {
    size: '3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '8px',
    background: '$black800',

    fontSize: '$xlarge',
    color: '$gray100',

    '&:hover': {
      background: '$black900',
      color: '$red500',
    },

    '@mobile': {
      size: '4rem',
    },
  },
});
