import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import useCursor from '../../../../app/hooks/useCursor';
import Icon from '../../../components/Icon';
import {
  Container,
  GitLink,
  IconsWrapper,
  SubTitle,
  TechIcons,
  Title,
} from './styles';

type ProjectProps = {
  name: string;
  overview: string;
  repository: string;
  technologies: string[];
};

const availableTechIcons = {
  Typescript: <Icon as="SiTypescript" key="typescript" />,
  ReactJs: <Icon as="SiReact" key="reactjs" />,
  'Next.JS': <Icon as="SiNextdotjs" key="nextjs" />,
  PrismaORM: <Icon as="SiPrisma" key="prismaorm" />,
  'Socket.IO': <Icon as="SiSocketdotio" key="socketio" />,
  Docker: <Icon as="SiDocker" key="docker" />,
  'Styled-Components': <Icon as="SiStyledcomponents" key="styledcomponents" />,
  'Node.JS': <Icon as="FaNodeJs" key="nodejs" />,
};

function Project({ name, overview, repository, technologies }: ProjectProps) {
  const { onChangeCursorModel } = useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [techIcons, setTechIcons] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const icons = technologies.map(
      (technology) => availableTechIcons[technology],
    );

    setTechIcons(icons);
  }, []);

  function onMouseHover() {
    setIsHovered((prevState) => !prevState);
  }

  return (
    <Container onMouseEnter={onMouseHover} onMouseLeave={onMouseHover}>
      <div>
        <Title>{name}</Title>
        <SubTitle>{overview}</SubTitle>
      </div>
      <IconsWrapper>
        <TechIcons>{techIcons.map((icon) => icon)}</TechIcons>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
          >
            <GitLink
              href={repository}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onChangeCursorModel('hovered')}
              onMouseLeave={() => onChangeCursorModel('default')}
            >
              <Icon as="SiGithub" />
            </GitLink>
          </motion.div>
        )}
      </IconsWrapper>
    </Container>
  );
}

export default Project;
