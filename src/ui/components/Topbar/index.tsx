import { memo } from 'react';

import Logo from './Logo';
import { Container, Wrapper } from './styles';
import TopbarLinks from './TopbarLinks';

function Topbar() {
  return (
    <Container id="topbar">
      <Wrapper>
        <Logo />
        <TopbarLinks />
      </Wrapper>
    </Container>
  );
}

export default memo(Topbar);
