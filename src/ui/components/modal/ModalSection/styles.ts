import styled from '../../../styles';

export const Container = styled('div', {
  '& > div': {
    marginBottom: '0.6rem',

    fontWeight: 'bold',
    fontSize: '$medium',
  },

  '@mobile': {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      marginY: '1rem',

      fontWeight: 'bold',
      fontSize: '$xlarge',
    },

    button: {
      width: 'calc(100vw - 4rem)',
    },
  },
});
