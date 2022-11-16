import { ICountry } from './country';
import { HalfAccount } from './halfAccounts';

export interface IMethodPayments {
  id: string;
  code: string;
  name: string;
  region: string;
  country: ICountry;
  halfAccount: HalfAccount;
  createdAt: string;
  updatedAt: string;
}
export interface IUserMethodPayments {
  id: string;
  name: string;
  methodPaymentId: string;
  state: string;
  userId: string;
  accountType: string;
  accountHolder: string;
  contactMethod: string;
  accountNumber: string;
  identificationCard: string;
  contactUser: string;
  red: string;
  methodPayment: IMethodPayments;
}
