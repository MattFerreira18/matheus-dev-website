import { GetStaticProps } from 'next';

import SocialMediasPage from '../ui/pages/SocialMedias';

function SocialMedias() {
  return <SocialMediasPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default SocialMedias;
