import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import useCursor from '../../../../app/hooks/useCursor';
import Icon from '../../Icon';
import { Container } from './styles';

function ToTopButton() {
  const { onChangeCursorModel } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsVisible(window.scrollY !== 0);
    }, 800);
  });

  function handleMoveStartPage() {
    window.scrollTo(0, 0);
  }

  return (
    <Container
      onMouseEnter={() => onChangeCursorModel('hovered')}
      onMouseLeave={() => onChangeCursorModel('default')}
      onClick={() => handleMoveStartPage()}
      aria-label="ir para o início"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Icon as="FiArrowUp" />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default ToTopButton;
