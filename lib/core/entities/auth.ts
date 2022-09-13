export type TCurrentUser = {
  address_wallet: string;
  id: string;
  email: string;
  name: string;
  lastName: string;
  country: string;
  phone?: string;
  partner?: string;
  parentId?: string;
  username: string;
  role: string;
  iat?: number;
  exp?: number;
};
