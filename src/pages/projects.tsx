import { GetStaticProps } from 'next';

import ProjectsPage from '../ui/pages/Projects';

function Projects() {
  return <ProjectsPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default Projects;
