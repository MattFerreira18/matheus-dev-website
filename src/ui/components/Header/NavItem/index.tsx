import NextLink from 'next/link';

import { Container } from './styles';

type HeaderNavItemProps = {
  active?: boolean;
  children: string;
  href: string;
};

function HeaderNavItem({ active = false, children, href }: HeaderNavItemProps) {
  return (
    <NextLink href={href} shallow passHref>
      <Container className={active && 'active'} aria-label={children}>
        {children}
      </Container>
    </NextLink>
  );
}

export default HeaderNavItem;
