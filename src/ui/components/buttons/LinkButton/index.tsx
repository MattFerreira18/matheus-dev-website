import { ButtonHTMLAttributes } from 'react';

import useMouse from '../../../../app/hooks/useMouse';
import { Container } from './styles';

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

function LinkButton({ title, ...props }: LinkButtonProps) {
  const { changeCursorModel } = useMouse();

  return (
    <Container
      onMouseEnter={() => changeCursorModel('hovered')}
      onMouseLeave={() => changeCursorModel()}
      {...props}
    >
      {title}
    </Container>
  );
}

export default LinkButton;
