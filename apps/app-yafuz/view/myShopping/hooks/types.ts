import { IInvoices, UseMutateFunction } from 'core';

export type TUseConfig = {
  translate: (key: string) => string;
  handleCancelBuyer: UseMutateFunction<
    { data: IInvoices },
    { error: boolean },
    { invoiceId: string },
    unknown
  >;
  handlePaymentBuyer: UseMutateFunction<
    { data: IInvoices },
    { error: boolean },
    { invoiceId: string; photo: string },
    unknown
  >;
  loadingCancelBuyer: boolean;
  loadingPaymentBuyer: boolean;
};
