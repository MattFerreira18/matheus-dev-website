import styled from '../../../styles';

export const Container = styled('button', {
  size: '14rem',

  marginY: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  borderRadius: '0.5rem',
  border: '1px solid $black800',
  background: 'none',

  color: '$gray100',
  letterSpacing: '0.8px',
  fontFamily: '$body',
  fontSize: '$medium',

  '& svg': {
    fontSize: '5rem',
    marginY: '1rem',
  },

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '& svg + span': {
    marginBottom: '0.2rem',

    fontSize: '$large',
    fontWeight: 'bold',
  },

  '& span.reduced': {
    fontSize: '$small',
  },

  '@tablet': {
    width: '12rem',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
  },
});
