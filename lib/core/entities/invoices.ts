import { ISales } from './sales';
import { IUser } from './user';

export interface IInvoices {
  id: string;
  dateApproval?: string;
  dateCreate: string;
  datePayment?: string;
  quantity: 20;
  salesId: string;
  photo?: string;
  dateCancel?: string;
  expirationDate?: string;
  state: 'PROGRESS' | 'CANCEL_BUYER' | 'CANCEL_SELLER' | 'PAYMENT' | 'APPROVAL';
  buyerId: string;
  sellerId: string;
  sale: ISales;
  buyer: IUser;
  seller: IUser;
}
