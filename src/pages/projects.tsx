import { GetStaticProps } from 'next';

import ProjectsPage from '../ui/pages/Projects';

interface PinnedRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  updated_at: string;
}

interface StaticProps {
  pinnedRepos: PinnedRepo[];
}

const GIT_USERNAME = 'MattFerreira18';

function Projects({ ...props }: StaticProps) {
  return <ProjectsPage {...props} />;
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const response = await fetch(
    `https://api.github.com/users/${GIT_USERNAME}/starred`,
  );

  const body = await response.json();

  const pinnedRepos = body?.filter(
    (starredRepo) => starredRepo.owner.login === GIT_USERNAME,
  ) as PinnedRepo[];

  const sorttedPinnedRepos = pinnedRepos?.sort(
    (first, second) =>
      Date.parse(new Date(second.updated_at).toString()) -
      Date.parse(new Date(first.updated_at).toString()),
  );

  return {
    props: {
      pinnedRepos: sorttedPinnedRepos,
    },
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default Projects;
