/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-danger */
import { getCssText } from '../../styles';

const CssHelper = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  </>
);

export default CssHelper;
