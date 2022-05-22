import { GetStaticProps } from 'next';

import HomePage from '../ui/pages/Home';

function Home() {
  return <HomePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default Home;
