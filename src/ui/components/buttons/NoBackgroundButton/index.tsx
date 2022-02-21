import React, { ButtonHTMLAttributes } from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

type NoBackgroundButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function NoBackgroundButton({
  title,
  ...props
}: NoBackgroundButtonProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Container
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler()}
      {...props}
    >
      {title}
    </Container>
  );
}
