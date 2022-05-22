import { useState } from 'react';

import useMouse from '../../../../app/hooks/useMouse';
import { Container } from './styles';

type SocialLinkProps = {
  name: string;
  icon: React.ReactElement;
  link: string;
  nickname: string;
};

function SocialLink({ icon, link, name, nickname }: SocialLinkProps) {
  const { changeCursorModel } = useMouse();
  const [isHovering, setIsHovering] = useState(false);

  function onMouseEnter() {
    changeCursorModel('hovered');
    setIsHovering(true);
  }

  function onMouseLeave() {
    changeCursorModel();
    setIsHovering(false);
  }

  return (
    <Container
      aria-label={name}
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      <h3 style={{ fontSize: isHovering && nickname.length > 20 && '12px' }}>
        {isHovering ? nickname : name}
      </h3>
    </Container>
  );
}

export default SocialLink;
