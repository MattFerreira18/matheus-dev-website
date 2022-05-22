import { motion } from 'framer-motion';

import socialNetworks from '../../../app/data/socialNetworks';
import { SocialLink } from '../../components/links';
import { Container, Title, Wrapper } from './styles';

function SocialMediasPage() {
  return (
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
          {socialNetworks.map(({ icon, link, name, nickname }) => (
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
  );
}

export default SocialMediasPage;
