import styled from '../../styles';

export const Container = styled('header', {
  height: '$16',
  maxWidth: '1440px',

  margin: '0 auto',
  padding: '$4',

  borderBottom: '1px solid $gray400',
  background: '$gray500',

  '& nav': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
