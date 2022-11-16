import { IUserMethodPayments } from './methodPayment';

export interface IUser {
  id: string;
  MyID: string;
  PadreID?: string;
  address_wallet: string;
  apellidos: string;
  celular: string;
  country: string;
  email: string;
  estado: true;
  nombre: string;
  password: string;
  confirmPassword: string;
  patrocinador?: string;
  role: string;
  token?: string;
  twitter?: string;
  userTelegram?: string;
  username: string;
  youtube?: string;
  usermethodpayment?: IUserMethodPayments[];
}
