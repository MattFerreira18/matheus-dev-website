import styled from '../../../styles';

export const Container = styled('a', {
  paddingY: '$2',
  paddingX: '$4',

  color: '$gray200',
  letterSpacing: '0.6px',

  borderRadius: '$sm',

  '&:hover': {
    background: '$gray900',
    color: '$white',
  },
  '&:not(:first-child)': {
    marginLeft: '1rem',
  },
  '&.active': {
    background: '$gray800',
    color: '$white',
  },
});
