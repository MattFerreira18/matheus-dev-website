import { motion } from 'framer-motion';

import mySkills from '../../../app/data/mySkills';
import HardSkill from './HardSkill';
import { Container, Title, Wrapper } from './styles';

function SkillsPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
      >
        <Title>Habilidades</Title>
      </motion.div>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          {mySkills.hardSkills.map(({ name, description, icon }) => (
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
  );
}

export default SkillsPage;
