import { useRouter } from 'next/router';

import LinkButton from '../ui/components/buttons/LinkButton';
import { Container } from '../ui/styles/pages/404';

export default function NotFound() {
  const router = useRouter();

  function handleToInitialPage() {
    router.push('/');
  }

  return (
    <Container>
      <h1>404</h1>
      <h2>Esta página não existe.</h2>
      <LinkButton
        aria-label="retornar para a página inicial"
        title="Clique aqui para ir para a página inicial"
        onClick={() => handleToInitialPage()}
      />
    </Container>
  );
}
