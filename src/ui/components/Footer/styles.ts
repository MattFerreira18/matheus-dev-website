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

export const InfoWrapper = styled('div', {
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginX: '0.4rem',
  },

  strong: {
    marginLeft: '0.4rem',
  },
});

export const IconsWrapper = styled('div', {
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '1.5rem',

  '& a': {
    color: '$gray100',
    transition: '250ms',
  },

  '& a:not(:first-child)': {
    marginLeft: '1rem',
  },

  '& a:hover': {
    color: '$gray50',
  },

  '@mobile': {
    fontSize: '$xlarge',
    marginBottom: '1rem',
  },
});
