import { IInvoices, NamespaceTranslate, UseMutateFunction } from 'core';

export type TUseConfig = {
  translate: (key: NamespaceTranslate) => string;
  handleCancelBuyer: UseMutateFunction<
    IInvoices,
    unknown,
    { invoiceId: string }
  >;
  handlePaymentBuyer: UseMutateFunction<
    IInvoices,
    unknown,
    { invoiceId: string; photo: string }
  >;
  loadingCancelBuyer: boolean;
  loadingPaymentBuyer: boolean;
};
