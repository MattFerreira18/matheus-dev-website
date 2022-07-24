/* eslint-disable import/prefer-default-export */
import { globalCss } from "./styled";

export const createGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    fontFamily: '$body, Arial, Helvetica, Courier, sans-serif',
    transition: '250ms',
  },
  html: {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 480px)': {
      fontSize: '87.5%',
    },
  },
  body: {
    color: '$gray100',
    fontFamily: '$body',
    background: '$gray600',
  },
  'h1, h2, h3, h4': {
    fontFamily: '$title',
  },
  a: {
    textDecoration: 'none',
    color: '$gray100',
  },
  button: {
    cursor: 'pointer',
  },
  p: {
    lineHeight: 1.8,
  },
});
