import { IExchangeCurrency } from './exchangeCurrency';
import { IUser } from './user';

export interface ISales {
  id: string;
  dateCreate: string;
  dateApproval: null;
  price: number;
  quantity: number;
  state: 'SELL' | 'ENABLE' | 'PROGRESS' | 'DISABLED';
  userId: string;
  user: IUser;
  exchangeCurrency: IExchangeCurrency;
}
