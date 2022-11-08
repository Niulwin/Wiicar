import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
    key: '1',
    name: 'global.menu_options.home',
    path: '/home',
    icon: 'home',
    isPrivate: false
  },
  {
    key: '2',
    name: 'global.menu_options.offers_list',
    path: '/offer-list',
    icon: 'list',
    isPrivate: false
  },
  {
    key: '3',
    name: 'global.menu_options.my_offers',
    path: '/my-offers',
    icon: 'money-bill',
    isPrivate: true
  },
  {
    key: '4',
    name: 'global.menu_options.my_shopping',
    path: '/my-shopping',
    icon: 'shopping-cart',
    isPrivate: true
  },
  {
    key: '4',
    name: 'global.menu_options.my_sales',
    path: '/my-sales',
    icon: 'exchange',
    isPrivate: true
  },
  {
    key: '5',
    name: 'global.menu_options.my_accounts',
    path: '/my-accounts',
    icon: 'piggy-bank',
    isPrivate: true
  }
  /*   {
    key: '6',
    name: 'global.menu_options.my_banks',
    path: '/banks',
    icon: 'university',
    isPrivate: true
  } */
];
