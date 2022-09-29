export type TUseCreateAccount = {
  setShowModal: React.Dispatch<boolean>;
  refetch: () => void;
};
export type TInputUserMethodPayments = {
  methodPaymentId: string;
  typeAccount: 'Ahorro' | 'Corriente';
  value: string;
  identification_card: string;
};
