import { UpButton } from '../components/buttons';
import DotRing from '../components/DotRing';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Wrapper } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DotRing />
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
      <UpButton />
    </>
  );
}
