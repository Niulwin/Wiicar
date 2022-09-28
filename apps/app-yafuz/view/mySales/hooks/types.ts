import {
  IInvoices,
  NamespaceTranslate,
  TPagination,
  UseMutateFunction
} from 'core';

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
  translate: (key: NamespaceTranslate) => string;
  handleCancelSeller: UseMutateFunction<
    IInvoices,
    unknown,
    { invoiceId: string }
  >;
  handleApproveSeller: UseMutateFunction<
    IInvoices,
    unknown,
    { invoiceId: string }
  >;
  loadingCancelSeller: boolean;
  loadingApproveSeller: boolean;
};
