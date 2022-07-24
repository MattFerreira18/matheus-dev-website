import type { GetStaticProps, NextPage } from 'next';

import Image from '../components/Image';
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
  flexDirection: 'column-reverse',

  '@bp2': {
    flexDirection: 'row'
  },
  '& p': {
    maxWidth: '600px',
    marginBottom: '$4',
    '@bp3': {
      maxWidth: '800px',
      marginBottom: '$2'
    },
    '&:last-of-type': {
      marginTop: '$6',
      '@bp2': {
        marginBottom: '$4'
      }
    }
  },
  '& ul': {
    marginLeft: '$4',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(120px, 200px))'
  },
  '& li': {
    listStyleType: 'none',
    position: 'relative',
    lineHeight: 1.6,
    '&:before': {
      content: '',
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderTopColor: '$red500',
      borderRightColor: '$red500',
      transform: 'rotate(45deg)',
      position: 'absolute',
      bottom: 9,
      left: -16
    }
  }
});

const ImageWrapper = styled('div', {
  height: 300,
  width: 300,
  margin: '$16 0 $10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  background: '$gray300',

  '@bp3': {
    height: 400,
    width: 400
  },
  [`& ${Image}`]: {
    height: 280,
    width: 280,
    position: 'relative',

    '& img': {
      filter: 'saturate(1.25)',
    },
    '@bp3': {
      height: 360,
      width: 360,
      '&:before': {
        height: 360,
        width: 360,
      }
    }
  }
});

const About: NextPage = () => (
  <Container>
    <h1>About me</h1>
    <Content>
      <div>
        <p>
          Hello!, Working more than of 3 years, I&apos; m a Software Developer
          and a eternal student passionate about learning new concepts and to
          help others people around me.
        </p>
        <p>
          Currently, I&apos; a student of Computer Science at UNIP university
          and a Front-End Developer at Promobit and Fullstack Developer
          Freelancer.
        </p>
        <p>
          There&apos;s a few technologies that I&apos;ve been working recently:
        </p>
        <ul>
          <li>Typescript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>Jest</li>
          <li>NodeJS</li>
          <li>Docker</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Storybook</li>
        </ul>
      </div>
      <ImageWrapper>
        <Image
          src="https://github.com/MattFerreira18.png"
          alt="Matheus Ferreira"
          height={120}
          width={120}
          priority
        />
      </ImageWrapper>
    </Content>
  </Container>
);

export const getStaticProps: GetStaticProps = () => ({
  props: {},
  revalidate: 60 * 60 * 24 // 1 day
});

export default About;
