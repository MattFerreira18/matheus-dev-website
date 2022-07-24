import NextLink from 'next/link';
import { useRouter } from 'next/router';

import LINKS from '../../../app/constants/links';
import { styled } from '../../styles';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start'
});

const Link = styled('a', {
  borderRadius: '$2',
  display: 'inline-block',
  padding: '$2 $4',
  position: 'relative',

  '&:after': {
    height: 0,
    width: 32,
    margin: '0 auto',
    borderColor: '$gray200',
    borderStyle: 'solid',
    borderWidth: '1px',
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    content: ''
  },

  '&:not(:last-of-type)': {
    marginRight: '$4'
  },
  '&:hover': {
    background: '$gray400'
  },
  variants: {
    type: {
      active: {
        color: '$gray100',
        '&:after': {
          display: '-webkit-box'
        }
      },
      default: {
        color: '$gray200',
        '&:after': {
          display: 'none'
        }
      }
    }
  },
  defaultVariants: {
    type: 'default'
  }
});

const TOPBAR_LINKS = [
  {
    name: 'About',
    href: LINKS.ABOUT
  },
  {
    name: 'Projects',
    href: LINKS.PROJECTS
  },
  {
    name: 'Blog',
    href: LINKS.BLOG
  },
  {
    name: 'Contact me',
    href: LINKS.CONTACT_ME
  }
];

function TopbarLinks() {
  const { pathname } = useRouter();

  const isActive = (href: string) => href === pathname;

  return (
    <Container>
      {TOPBAR_LINKS.map(({ name, href }) => (
        <NextLink key={name} href={href} passHref>
          <Link type={isActive(href) ? 'active' : 'default'}>{name}</Link>
        </NextLink>
      ))}
    </Container>
  );
}

export default TopbarLinks;
