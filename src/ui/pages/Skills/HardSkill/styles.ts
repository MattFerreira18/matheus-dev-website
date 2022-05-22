import styled from '../../../styles';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  position: 'absolute',

  // marginBottom: '1rem',
  size: '14rem',

  borderRadius: '$lg',
  border: '2px solid $gray500',

  color: '$gray300',
  letterSpacing: '0.6px',
  fontSize: '$md',

  background: '$gray500',

  '& svg': {
    fontSize: '5rem',
    marginY: '1rem',
  },

  '&:hover': {
    color: '$gray100',
    borderColor: '$gray100',
  },

  '& span': {
    fontSize: '$large',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  },

  // '@tablet': {
  //   width: '12rem',
  // },

  // '@mobile': {
  //   width: '100%',
  // },
});
