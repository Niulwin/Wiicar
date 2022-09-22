import { IInvoices, TPagination, UseMutateFunction } from 'core';

export type TUseCreteSale = {
  setShowModal: React.Dispatch<boolean>;
  refetch: () => void;
};

export type TInputSale = {
  price: number;
  quantity: number;
  userMethodPaymentId: string;
};

export type TUseConfig = {
  data?: TPagination<IInvoices>;
  translate: (key: string) => string;
  handleCancelSeller: UseMutateFunction<
    { data: IInvoices },
    { error: boolean },
    { invoiceId: string },
    unknown
  >;
  handleApproveSeller: UseMutateFunction<
    { data: IInvoices },
    { error: boolean },
    { invoiceId: string },
    unknown
  >;
  loadingCancelSeller: boolean;
  loadingApproveSeller: boolean;
};
