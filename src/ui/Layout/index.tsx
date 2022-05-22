import { UpButton } from '../components/buttons';
import DotRing from '../components/DotRing';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DotRing />
      <Header />
      {children}
      <Footer />
      <UpButton />
    </>
  );
}
