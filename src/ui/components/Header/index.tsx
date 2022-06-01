import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { CURR_LANG } from '../../../app/constants/language';
import HeaderNavItem from './NavItem';
import { Container } from './styles';

const NAV_ITEMS = [
  {
    title: {
      EN: 'About',
      PTBR: 'Sobre Mim',
    },
    sectionLink: '/',
  },
  {
    title: {
      EN: 'Social Medias',
      PTBR: 'Redes Sociais',
    },
    sectionLink: '/social-medias',
  },
  {
    title: {
      EN: 'Skills',
      PTBR: 'Habilidades',
    },
    sectionLink: '/skills',
  },
  {
    title: {
      EN: 'Projects',
      PTBR: 'Projetos',
    },
    sectionLink: '/projects',
  },
  {
    title: {
      EN: 'Posts',
      PTBR: 'Artigos',
    },
    sectionLink: '/articles',
  },
  {
    title: {
      EN: 'Recomendations',
      PTBR: 'Recomendações',
    },
    sectionLink: '/recomendations',
  },
];

function isCurrSection(section: string, pathname: string) {
  return section === pathname;
}

function Header() {
  const { pathname } = useRouter();

  return (
    <Container>
      <motion.nav
        animate={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '-10rem' }}
      >
        {NAV_ITEMS.map(({ title, sectionLink }) => (
          <HeaderNavItem
            key={title[CURR_LANG]}
            aria-label={`ir para ${title[CURR_LANG]}`}
            href={sectionLink}
            active={isCurrSection(sectionLink, pathname)}
          >
            {title[CURR_LANG]}
          </HeaderNavItem>
        ))}
      </motion.nav>
    </Container>
  );
}

export default Header;
