import { motion } from 'framer-motion';

import myProjects from '../../../app/data/myProjects';
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
            {myProjects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

export default ProjectsPage;
