import { NextSeo } from 'next-seo';

type PageProps = {
  title: string;
  path: string;
  description: string;
  children: React.ReactNode;
};

export function Page({
  title: titlePrefix,
  path,
  description,
  children,
}: PageProps) {
  const title = `Matheus Ferreira | ${titlePrefix}`;
  const url = `matheus-ferreira.com/${path}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
}
