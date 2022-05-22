import { globalCss } from '.';

export const globalStyles = globalCss({
  //* CSS reset
  '*': {
    boxSizing: 'border-box',
    cursor: 'none',
    fontFamily: '$body',
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
  },
  html: {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 720px)': {
      fontSize: '87.5%',
    },
    '@media (max-width: 480px)': {
      fontSize: '81.25%',
    },
  },
  //* default styles
  body: {
    background: '$gray500',
    color: '$white',
    fontSize: '$md',
  },
  a: {
    textDecoration: 'none',
    transition: '250ms',
  },
  button: {
    border: 'none',
    transition: '250ms',
  },
  input: {
    outline: 'none',
    transition: '250ms',
  },
  ul: {
    listStyleType: 'none',
  },
  '*::selection': {
    background: '$red900',
    color: '$gray100',
  },
  //* scrollbar styles
  '::-webkit-scrollbar': {
    width: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: '$gray300',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$gray900',
    borderRadius: '4px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: '$gray600',
  },
});
