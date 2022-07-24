import NextLink from 'next/link';

import LINKS from '../../../app/constants/links';
import { styled } from '../../styles';

const Anchor = styled('a', {
  borderRadius: '$2',
  color: '$gray100',
  fontFamily: '$title',
  fontSize: '$lg',
  fontWeight: 'bold',
  padding: '$1 $2',

  '&:hover': {
    background: '$gray400',
    color: '$gray200'
  }
});

function Logo() {
  return (
    <NextLink href={LINKS.HOME} passHref>
      <Anchor>M</Anchor>
    </NextLink>
  );
}

export default Logo;
