import { Popover } from '../../../components/modal';
import { Container } from './styles';

type HardSkillProps = {
  name: string;
  icon: React.ReactNode;
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
      <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {icon}
        <span>{name}</span>
      </Container>
    </Popover>
  );
}

export default HardSkill;
