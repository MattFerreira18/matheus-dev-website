import { GetStaticProps } from 'next';

function Recomendations() {
  return <h1>Social Medias</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};

export default Recomendations;