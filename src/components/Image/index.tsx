/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';

import { styled } from '../../ui/styles';

type ImageProps = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
  priority?: boolean;
};

const Container = styled('div', {
  position: 'relative',
  height: 120,
  width: 120
});

function Image({ alt, src, priority }: ImageProps) {
  if (priority) {
    return (
      <Container className="image">
        <NextImage src={src} alt={alt} layout="fill" />
      </Container>
    );
  }

  return (
    <Container className="image">
      <img src={src} alt={alt} />
    </Container>
  );
}

Image.toString = () => '.image';

Image.defaultProps = {
  priority: false
};

export default Image;
