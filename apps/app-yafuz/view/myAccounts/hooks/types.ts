import { IUserMethodPayments } from 'core';

export type TUseCreateAccount = {
  setShowModal: React.Dispatch<boolean>;
  refetch: () => void;
  initialValue?: IUserMethodPayments;
};
export type TInputUserMethodPayments = {
  name: string;
  methodPaymentId: string;
  accountType: 'Ahorro' | 'Corriente';
  accountHolder: string;
  contactMethod: string;
  accountNumber: string;
  identificationCard: string;
  contactUser: string;
  red: string;
  region?: string;
};
