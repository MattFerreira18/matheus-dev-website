import styled from '../../../../styles';

export const Container = styled('div', {
  height: '12rem',
  width: '22rem',

  marginY: '1rem',
  padding: '2rem',

  border: '1px solid $black800',
  borderRadius: '0.5rem',
  background: 'none',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  transition: '250ms',

  '&:hover': {
    background: '$black800',
    color: '$gray50',

    '& a': {
      color: '$gray50',
    },
  },

  '@tablet': {
    width: '16rem',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
    height: '14rem',
  },
});

export const Title = styled('h3', {
  marginBottom: '0.2rem',

  fontSize: '$large',
  fontWeight: 'bold',
  fontFamily: '$body',
  letterSpacing: '0.8px',
});

export const SubTitle = styled('div', {
  letterSpacing: '0.2px',
  fontFamily: '$body',
  fontSize: '$medium',

  marginY: '0.4rem',
});

export const IconsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$large',

  '& a': {
    color: '$gray100',
  },

  '@mobile': {
    fontSize: '1.5rem',
  },
});

export const TechIcons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  'svg:not(:first-child)': {
    marginLeft: '6px',
  },
});

export const GitLink = styled('div', {
  fontSize: '1.5rem',

  '@mobile': {
    fontSize: '$xlarge',
  },
});
