import { nanoid } from 'nanoid';

// ROLES (1: Gerencia), (2: Comercial) (3: Planner),
const ID = nanoid(20);

export interface RoutesInterface {
  key?: any;
  path?: string;
  name?: string;
  icon?: string;
  subModule?: any[];
}
export const routes: RoutesInterface[] = [
  {
    key: ID,
    name: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    key: ID,
    name: 'Lista de ofertas',
    path: '/offer-list',
    icon: 'list'
  },
  {
    key: ID,
    name: 'Mis compras',
    path: '/my-shopping',
    icon: 'shopping-cart'
  },
  {
    key: ID,
    name: 'Mis ventas',
    path: '/my-sales',
    icon: 'exchange'
  },
  {
    key: ID,
    name: 'Mis cuentas',
    path: '/my-accounts',
    icon: 'piggy-bank'
  },
  {
    key: ID,
    name: 'Bancos',
    path: '/banks',
    icon: 'university'
  },
  {
    key: ID,
    name: 'Profile',
    path: '/profile',
    icon: 'user-circle'
  }
];
