import { motion } from 'framer-motion';

import SKILLS from '../../../app/constants/skills';
import Seo from '../../components/Seo';
import HardSkill from './HardSkill';
import { Container, Title, Wrapper } from './styles';

function SkillsPage() {
  return (
    <>
      <Seo
        titleSuffix="My Best Hard Skills"
        description="This is my best hard skils"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Habilidades</Title>
        </motion.div>
        <Wrapper>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            {SKILLS.map(({ name, description, icon }) => (
              <HardSkill
                key={name}
                name={name}
                description={description}
                icon={icon}
              />
            ))}
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

export default SkillsPage;
