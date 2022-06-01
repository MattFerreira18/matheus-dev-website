import NextLink from 'next/link';
import useCursor from 'src/app/hooks/useCursor';

import { Container } from './styles';

type HeaderNavItemProps = {
  active?: boolean;
  children: string;
  href: string;
};

function HeaderNavItem({ active = false, children, href }: HeaderNavItemProps) {
  const { onChangeCursorModel } = useCursor();

  return (
    <NextLink href={href} shallow passHref>
      <Container
        className={active && 'active'}
        aria-label={children}
        onMouseEnter={() => onChangeCursorModel('hovered')}
        onMouseLeave={() => onChangeCursorModel('default')}
      >
        {children}
      </Container>
    </NextLink>
  );
}

export default HeaderNavItem;
