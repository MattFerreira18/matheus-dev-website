import { motion } from 'framer-motion';

import PROJECTS from '../../../app/constants/projects';
import Seo from '../../components/Seo';
import Project from './Project';
import { Container, Title, Wrapper } from './styles';

function ProjectsPage() {
  return (
    <>
      <Seo
        titleSuffix="My Favorite Projects"
        description="This is my favorite projects"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Projetos</Title>
        </motion.div>
        <Wrapper>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            {PROJECTS.map(({ name, overview, repository, technologies }) => (
              <Project
                key={name}
                name={name}
                overview={overview}
                repository={repository}
                technologies={technologies}
              />
            ))}
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

export default ProjectsPage;
