import { motion } from 'framer-motion';

import Seo from '../../components/Seo';
import Project from './Project';
import { Container, Title, Wrapper } from './styles';

interface ProjectsPage {
  pinnedRepos: {
    id: number;
    name: string;
    html_url: string;
    description: string;
    topics: string[];
  }[];
}

function ProjectsPage({ pinnedRepos }: ProjectsPage) {
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
            {pinnedRepos.map(({ id, name, description, html_url, topics }) => (
              <Project
                key={id}
                name={name}
                overview={description}
                repository={html_url}
                technologies={topics}
              />
            ))}
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

export default ProjectsPage;
