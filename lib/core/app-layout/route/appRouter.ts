import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface RoutesInterface {
  key: string;
  path: string;
  name: string;
  icon: IconProp;
  isPrivate: boolean;
}
export const routes: RoutesInterface[] = [
  {
    key: '1',
    name: 'global.menu_options.TRANSLATE_KEY',
    path: '/',
    icon: 'home',
    isPrivate: false
  }
];
