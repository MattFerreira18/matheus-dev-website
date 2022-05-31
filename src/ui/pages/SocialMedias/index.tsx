import { motion } from 'framer-motion';

import SOCIAL_MEDIAS from '../../../app/constants/socialMedias';
import SocialLink from '../../components/links/SocialLink';
import Seo from '../../components/Seo';
import { Container, Title, Wrapper } from './styles';

function SocialMediasPage() {
  return (
    <>
      <Seo
        titleSuffix="My Social Medias"
        description="My current social medias"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Redes Sociais</Title>
        </motion.div>
        <Wrapper>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            {SOCIAL_MEDIAS.map(({ icon, link, name, nickname }) => (
              <SocialLink
                key={name}
                aria-label={name}
                icon={icon}
                link={link}
                name={name}
                nickname={nickname}
              />
            ))}
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

export default SocialMediasPage;
