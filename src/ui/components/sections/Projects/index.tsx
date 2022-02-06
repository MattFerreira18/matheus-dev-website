import { motion } from 'framer-motion';
import React from 'react';

import { Project } from './Project';
import { Container, Title, Wrapper } from './styles';

export function Projects() {
  const projects = [
    {
      name: 'theMessage',
      overview: 'your instant messaging open-source',
      repository: 'https://github.com/MattFerreira18',
      technologies: [
        'Typescript',
        'Next.JS',
        'PrismaORM',
        'Socket.IO',
        'Styled-Components',
        'Node.JS',
      ],
    },
    {
      name: 'theMessage2',
      overview: 'your instant messaging open-source',
      repository: 'https://github.com/MattFerreira18',
      technologies: [
        'Typescript',
        'Next.JS',
        'PrismaORM',
        'Socket.IO',
        'Styled-Components',
        'Node.JS',
      ],
    },
    {
      name: 'theMessage3',
      overview: 'your instant messaging open-source',
      repository: 'https://github.com/MattFerreira18',
      technologies: [
        'Typescript',
        'Next.JS',
        'PrismaORM',
        'Socket.IO',
        'Styled-Components',
        'Node.JS',
      ],
    },
  ];

  return (
    <Container id="projects">
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
          <Title>Projetos</Title>
        </motion.div>
        <Wrapper>
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              overview={project.overview}
              repository={project.repository}
              technologies={project.technologies}
            />
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
}