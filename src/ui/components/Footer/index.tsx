import { motion } from 'framer-motion';

import socialNetworks from '../../../app/data/socialNetworks';
import Icon from '../Icon';
import SocialNetworkLink from '../SocialNetworkLink';
import { Container, IconsWrapper, InfoWrapper } from './styles';

function Footer() {
  return (
    <Container>
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '2rem' }}
        viewport={{ once: true }}
      >
        <InfoWrapper>
          <span>feito com</span>
          <Icon as="AiFillHeart" />{' '}
          <span>
            por <strong>Matheus Ferreira</strong>
          </span>
        </InfoWrapper>
        <IconsWrapper>
          {socialNetworks.map((socialNetwork) => (
            <SocialNetworkLink
              key={socialNetwork.link}
              link={socialNetwork.link}
              aria-label={socialNetwork.name}
              icon={socialNetwork.icon}
            />
          ))}
          <SocialNetworkLink
            link="https://github.com/MattFerreira18/matheus-dev-website"
            icon={<Icon as="SiCodesandbox" />}
          />
        </IconsWrapper>
      </motion.div>
    </Container>
  );
}

export default Footer;
