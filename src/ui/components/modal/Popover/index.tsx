import { Children, useState, cloneElement } from 'react';

import ModalSection from '../ModalSection';
import { ArrowDown, Container, Content, Wrapper } from './styles';

type PopoverProps = {
  title: string;
  description: string;
  children: React.ReactElement;
};

function Popover({ title, description, children }: PopoverProps) {
  const [showPopup, setShowPopup] = useState(false);

  function onMouseEnter() {
    setShowPopup(true);
  }

  function onMouseLeave() {
    setShowPopup(false);
  }

  return (
    <Container>
      <Wrapper className={showPopup ? 'active' : ''}>
        <Content>
          <ModalSection title={title}>{description}</ModalSection>
        </Content>
        <ArrowDown />
      </Wrapper>
      {Children.map(children, (child) =>
        cloneElement(child, {
          onMouseEnter,
          onMouseLeave,
        }),
      )}
    </Container>
  );
}

export default Popover;
