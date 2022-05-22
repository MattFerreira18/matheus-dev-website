import type { PropertyValue } from '@stitches/react';

export default {
  marginY: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  marginX: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  paddingY: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  paddingX: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  size: (value: PropertyValue<'height'>) => ({
    width: value,
    height: value,
  }),
  borderX: (value: PropertyValue<'borderTop'>) => ({
    borderLeft: value,
    borderRight: value,
  }),
  borderY: (value: PropertyValue<'borderLeft'>) => ({
    borderTop: value,
    borderBottom: value,
  }),
};
