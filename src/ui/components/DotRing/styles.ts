import styled from '../../styles';

export const Ring = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '9999',

  size: '22px',

  border: '2px solid #CC1A06',
  borderRadius: '100%',

  transform: 'translate(-50%, -50%)',
  '-webkit-transition-duration': '100ms',
  transitionDuration: '100ms',
  '-webkit-transition-timing-function': 'ease-out',
  transitionTimingFunction: 'ease-out',
  willChange: 'width, height, transform, border',

  pointerEvents: 'none',

  '&.hovered': {
    size: '40px',
    borderWidth: '3px',
    borderColor: '#C69FE0',
  },
});

export const Dot = styled('div', {
  transition: 'none',

  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: '9999',

  size: '8px',

  background: '#FF2107',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',

  '&.hovered': {
    display: 'none',
  },
});
