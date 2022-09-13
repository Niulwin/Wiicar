import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { nanoid } from 'nanoid';

const ID = nanoid(20);

export interface RoutesInterface {
  key: string;
  path: string;
  name: string;
  icon: IconProp;
  // subModule?: any[];
}
export const routes: RoutesInterface[] = [
  {
    key: ID,
    name: 'global.menu_options.home',
    path: '/home',
    icon: 'home'
  },
  {
    key: ID,
    name: 'global.menu_options.offers_list',
    path: '/offer-list',
    icon: 'list'
  },
  {
    key: ID,
    name: 'global.menu_options.my_shopping',
    path: '/my-shopping',
    icon: 'shopping-cart'
  },
  {
    key: ID,
    name: 'global.menu_options.my_sales',
    path: '/my-sales',
    icon: 'exchange'
  },
  {
    key: ID,
    name: 'global.menu_options.my_accounts',
    path: '/my-accounts',
    icon: 'piggy-bank'
  },
  {
    key: ID,
    name: 'global.menu_options.my_banks',
    path: '/banks',
    icon: 'university'
  },
  {
    key: ID,
    name: 'global.menu_options.my_profile',
    path: '/profile',
    icon: 'user-circle'
  }
];
