import { Children, useState, cloneElement } from 'react';

import { ArrowDown, Container, Content, Wrapper, Section } from './styles';

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
          <Section>
            <div>{title}</div>
            {description}
          </Section>
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
