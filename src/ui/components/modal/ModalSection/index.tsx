import { Container } from './styles';

type ModalSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ModalSection({ title, children }: ModalSectionProps) {
  return (
    <Container>
      <div>{title}</div>
      {children}
    </Container>
  );
}

export default ModalSection;
