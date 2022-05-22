import { createStitches } from '@stitches/react';

import colors from './tokens/colors';
import fonts from './tokens/fonts';
import fontSizes from './tokens/fontSizes';
import media from './tokens/mediaQueries';
import radii from './tokens/radii';
import sizes from './tokens/sizes';
import space from './tokens/space';
import utils from './tokens/utils';
import zIndices from './tokens/zIndices';

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fonts,
    radii,
    sizes,
    space,
    zIndices,
  },
  media,
  utils,
});

export default styled;

export { css, globalCss, keyframes, getCssText, theme, createTheme, config };
