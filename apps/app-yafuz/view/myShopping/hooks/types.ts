import { IInvoices, NamespaceTranslate, UseMutateFunction } from 'core';

export type TUseConfig = {
  translate: (key: NamespaceTranslate) => string;
  handleCancelBuyer: UseMutateFunction<
    IInvoices,
    Record<string, unknown>,
    {
      variables?: { invoiceId: string } | undefined;
      query?: Record<string, unknown> | undefined;
      params?: string[] | undefined;
    },
    unknown
  >;
  loadingCancelBuyer: boolean;
};
