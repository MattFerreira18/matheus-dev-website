import { motion } from 'framer-motion';

import { Popover } from '../../../modal';
import { Container } from './styles';

type HardSkillProps = {
  name: string;
  icon: React.ReactChild;
  description: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function HardSkill({
  name,
  icon,
  description,
  onMouseEnter,
  onMouseLeave,
}: HardSkillProps) {
  return (
    <Popover title={name} description={description}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
          <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {icon}
            <span>{name}</span>
          </Container>
        </motion.div>
      </motion.div>
    </Popover>
  );
}

export default HardSkill;
