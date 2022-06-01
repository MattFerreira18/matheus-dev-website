import { ButtonHTMLAttributes } from 'react';

import useCursor from '../../../../app/hooks/useCursor';
import { Container } from './styles';

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

function LinkButton({ title, ...props }: LinkButtonProps) {
  const { onChangeCursorModel } = useCursor();

  return (
    <Container
      onMouseEnter={() => onChangeCursorModel('hovered')}
      onMouseLeave={() => onChangeCursorModel('default')}
      {...props}
    >
      {title}
    </Container>
  );
}

export default LinkButton;
