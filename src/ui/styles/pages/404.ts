import styled from '..';

export const Container = styled('div', {
  maxWidth: '1400px',
  height: '80vh',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  h1: {
    fontSize: '4rem',
  },
  h2: {
    marginBottom: '1rem',
  },
});
