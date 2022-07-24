import { GetStaticProps, NextPage } from 'next';

import PostPreview from '../components/PostPreview';
import { styled } from '../ui/styles';

const Container = styled('div', {
  height: '80%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  '& h1': {
    fontSize: 30,
    marginTop: '$28',
    '@bp2': {
      marginTop: 0,
      marginBottom: '$20',
      fontSize: 44
    }
  }
});

const Content = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
});


const Blog: NextPage = () => (
  <Container>
    <h1>Blog</h1>
    <Content>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </Content>
  </Container>
);

export const getStaticProps: GetStaticProps = () => ({
  props: {},
  revalidate: 60 * 60 * 24 // 1 day
});

export default Blog;
