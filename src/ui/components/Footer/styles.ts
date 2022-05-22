import styled from '../../styles';

export const Container = styled('footer', {
  height: '$16',
  maxWidth: '1440px',

  margin: '0 auto',
  padding: '$4',

  borderTop: '1px solid $gray400',
  background: '$black900',

  position: 'fixed',
  right: 0,
  left: 0,
  bottom: 0,

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@mobile': {
      flexDirection: 'column-reverse',
      height: 'auto',
      paddingY: '2rem',
    },
  },
});

export const Disclaimer = styled('div', {
  height: '$8',

  marginBottom: '4px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray300',

  svg: {
    marginX: '0.4rem',
  },
});

export const SocialNetworks = styled('div', {
  height: '$8',

  fontSize: '$lg',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& a': {
    color: '$gray300',
    transition: '250ms',
  },

  '& a:not(:first-child)': {
    marginLeft: '$4',
  },

  '& a:hover': {
    color: '$gray100',
  },

  '@mobile': {
    fontSize: '$xlarge',
    marginBottom: '1rem',
  },
});
