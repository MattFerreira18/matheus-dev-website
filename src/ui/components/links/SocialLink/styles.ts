import styled from '../../../styles';

export const Container = styled('a', {
  size: '$56',

  marginY: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  overflowX: 'hidden',

  borderRadius: '$lg',
  border: '2px solid $gray500',

  background: '$gray500',

  color: '$gray300',
  letterSpacing: '0.6px',
  fontSize: '$md',

  '& svg': {
    fontSize: '5rem',
    marginY: '$4',
  },

  '&:hover': {
    color: '$gray100',
    borderColor: '$gray100',
  },

  '& svg + span': {
    marginBottom: '$1',

    fontSize: '$large',
    fontWeight: 'bold',
  },

  '@tablet': {
    width: '12rem',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
  },
});
