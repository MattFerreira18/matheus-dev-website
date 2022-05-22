import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import useMouse from '../../../../app/hooks/useMouse';
import { Container, TextWrapper, ImageWrapper, Title } from './styles';

type FeaturedArticleProps = {
  id: string;
  banner: string;
  bannerAlt: string;
  title: string;
  overview: string;
};

function FeaturedArticle({
  id,
  banner,
  bannerAlt,
  title,
  overview,
}: FeaturedArticleProps) {
  const { changeCursorModel } = useMouse();

  return (
    <Link href={`/articles/${id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
          <Container
            onMouseEnter={() => changeCursorModel('hovered')}
            onMouseLeave={() => changeCursorModel()}
          >
            <ImageWrapper>
              <Image src={banner} alt={bannerAlt} width={288} height={148} />
            </ImageWrapper>

            <TextWrapper>
              <Title>{title}</Title>
              <p>{overview}</p>
            </TextWrapper>
          </Container>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default FeaturedArticle;
