import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type SeoProps = {
  titleSuffix: string;
  description: string;
};

function Seo({ titleSuffix, description }: SeoProps) {
  const { pathname } = useRouter();

  const title = `Matheus Ferreira | ${titleSuffix}`;
  const url = `matheus-ferreira.com${pathname}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
      }}
    />
  );
}

export default Seo;
