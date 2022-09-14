export interface IMethodPayments {
  id: string;
  code: string;
  createdAt: string;
  name: string;
  updatedAt: string;
}
export interface IUserMethodPayments {
  id: string;
  methodPaymentId: string;
  state: string;
  typeAccount: string;
  userId: string;
  value: string;
  methodPayment: IMethodPayments;
}
