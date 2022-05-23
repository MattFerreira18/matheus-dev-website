## TODO
- [x] change stitches config
- [x] change CSS tokens
- [x] recreate main pages
- [] rename some components
- [] refactor some components
- [] improve performance (memo, useMemo, useCallback)
- [] improve styles for resposibility
- [] consume the pinned repositories
- [] improve component styles
- [] check and improve web-vitals
- [] finish to internationalize the website (PT-BR and EN)
- [] create blog page

## New Architecture

```
  src
  | - app
  |     | - constants
  |     | - data
  |     | - data-mappers
  |     | - hooks
  |     | - contexts
  |     | - utils
  |     | - lib (externals)
  | - pages
  |     | - _app
  |     | - _document
  |     | - index
  |     | - 404
  |     | - 500
  | - ui (colors, sizes, components)
  |     | - components
  |     |       | - ??
  |     |           | - index
  |     |           | - styles
  |     |           | - ?? (childrens)
  |     | - page styles
  |     | - CSS configs
  |     | - CSS tokens
  |     | - layouts
```