/**
 * TODO: improve of how is changed the active prop present in `NavItem`
 */
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import HeaderNavItem from './NavItem';
import { Container } from './styles';

const NAV_ITEMS = [
  {
    title: {
      EN: 'About',
      PTBR: 'Sobre Mim',
    },
    section: 'about',
  },
  {
    title: {
      EN: 'Social Medias',
      PTBR: 'Redes Sociais',
    },
    section: 'social-medias',
  },
  {
    title: {
      EN: 'skills',
      PTBR: 'Habilidades',
    },
    section: 'skills',
  },
  {
    title: {
      EN: 'Projects',
      PTBR: 'Projetos',
    },
    section: 'projects',
  },
  {
    title: {
      EN: 'Posts',
      PTBR: 'Artigos',
    },
    section: 'articles',
  },
  {
    title: {
      EN: 'Recomendations',
      PTBR: 'Recomendações',
    },
    section: 'recomendations',
  },
];

const CURR_LANG = 'PTBR';

function Header() {
  const { asPath } = useRouter();

  return (
    <Container>
      <motion.nav
        animate={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '-10rem' }}
      >
        {NAV_ITEMS.map(({ title, section }) => (
          <HeaderNavItem
            key={title[CURR_LANG]}
            aria-label={`ir para ${title[CURR_LANG]}`}
            href={`/#${section}`}
            active={`/#${section}` === asPath}
          >
            {title[CURR_LANG]}
          </HeaderNavItem>
        ))}
      </motion.nav>
    </Container>
  );
}

export default Header;
