import { GetStaticProps } from 'next';

import SkillsPage from '../ui/pages/Skills';

function Skills() {
  return <SkillsPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default Skills;
