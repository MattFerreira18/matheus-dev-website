import React, { useEffect, useState } from 'react';

import { styled } from '../../styles';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled('main', {
  maxWidth: 1400,
  margin: '0 $4',
  '@bp2': {
    margin: '0 auto'
  }
});

function Layout({ children }: LayoutProps) {
  const [topbarHeight, setTopbarHeight] = useState<number | null>(null);

  useEffect(() => {
    const topbarEl = document.getElementById('topbar');
    setTopbarHeight(topbarEl?.clientHeight || 0);
  }, []);

  return (
    <StyledLayout style={{ height: `calc(90vh - ${topbarHeight}px)` }}>
      {children}
    </StyledLayout>
  );
}

export default Layout;
