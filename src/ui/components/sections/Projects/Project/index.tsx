import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  IoLogoGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSocketdotio,
  SiPrisma,
  FaNodeJs,
  SiDocker,
  SiStyledcomponents,
} from '../../../../../app/configs/icons';
import useMouse from '../../../../../app/hooks/useMouse';
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

const getTechIcon = {
  Typescript: <SiTypescript key="typescript" />,
  ReactJs: <SiReact key="reactjs" />,
  'Next.JS': <SiNextdotjs key="nextjs" />,
  PrismaORM: <SiPrisma key="prismaorm" />,
  'Socket.IO': <SiSocketdotio key="socketio" />,
  Docker: <SiDocker key="docker" />,
  'Styled-Components': <SiStyledcomponents key="styledcomponents" />,
  'Node.JS': <FaNodeJs key="nodejs" />,
};

function Project({ name, overview, repository, technologies }: ProjectProps) {
  const { changeCursorModel } = useMouse();
  const [techIcons, setTechIcons] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (technologies.length !== techIcons.length) {
      technologies.forEach((technology) => {
        setTechIcons((prevState) => [...prevState, getTechIcon[technology]]);
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
        <Container>
          <div>
            <Title>{name}</Title>
            <SubTitle>{overview}</SubTitle>
          </div>

          <IconsWrapper>
            <TechIcons>{techIcons.map((icon) => icon)}</TechIcons>

            <a href={repository} target="_blank" rel="noreferrer">
              <GitLink
                onMouseEnter={() => changeCursorModel('hovered')}
                onMouseLeave={() => changeCursorModel()}
              >
                <IoLogoGithub />
              </GitLink>
            </a>
          </IconsWrapper>
        </Container>
      </motion.div>
    </motion.div>
  );
}

export default Project;
