import { IUserMethodPayments } from './methodPayment';
import { IUser } from './user';

export interface ISales {
  id: string;
  dateCreate: string;
  dateApproval: null;
  price: number;
  quantity: number;
  state: 'SELL' | 'ENABLE' | 'PROGRESS' | 'DISABLED';
  userId: string;
  userMethodPaymentId: string;
  user: IUser;
  userMethodPayment: IUserMethodPayments;
}
