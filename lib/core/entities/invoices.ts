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
  state: string;
  userId: string;
  sale: ISales;
  user: IUser;
}
