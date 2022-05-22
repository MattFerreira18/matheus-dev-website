import { motion } from 'framer-motion';
import { createElement } from 'react';

import mySkills from '../../../../app/data/mySkills';
import HardSkill from '../../../pages/Skills/HardSkill';
import { Container, Title, Wrapper } from '../../../pages/Skills/styles';

function HardSkills() {
  return (
    <Container>
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '18rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Habilidades</Title>
        </motion.div>
        <Wrapper>
          {mySkills.hardSkills.map(({ name, description, icon }) => (
            <HardSkill
              key={name}
              name={name}
              description={description}
              icon={createElement(icon)}
            />
          ))}
        </Wrapper>
      </motion.div>
      <hr />
    </Container>
  );
}

export default HardSkills;
