import { createElement } from 'react';

import * as icons from '../../../app/configs/icons';

type IconProps = {
  as: keyof typeof icons;
};

export function Icon({ as }: IconProps) {
  return createElement(icons[as]);
}

export default Icon;
