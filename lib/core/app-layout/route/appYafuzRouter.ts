import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { nanoid } from 'nanoid';

const ID = nanoid(20);

export interface RoutesInterface {
  key: string;
  path: string;
  name: string;
  icon: IconProp;
  isPrivate: boolean;
  // subModule?: any[];
}
export const routes: RoutesInterface[] = [
  {
    key: ID,
    name: 'global.menu_options.home',
    path: '/home',
    icon: 'home',
    isPrivate: false
  },
  {
    key: ID,
    name: 'global.menu_options.offers_list',
    path: '/offer-list',
    icon: 'list',
    isPrivate: false
  },
  {
    key: ID,
    name: 'global.menu_options.my_shopping',
    path: '/my-shopping',
    icon: 'shopping-cart',
    isPrivate: true
  },
  {
    key: ID,
    name: 'global.menu_options.my_sales',
    path: '/my-sales',
    icon: 'exchange',
    isPrivate: true
  },
  {
    key: ID,
    name: 'global.menu_options.my_accounts',
    path: '/my-accounts',
    icon: 'piggy-bank',
    isPrivate: true
  },
  {
    key: ID,
    name: 'global.menu_options.my_banks',
    path: '/banks',
    icon: 'university',
    isPrivate: true
  }
];
