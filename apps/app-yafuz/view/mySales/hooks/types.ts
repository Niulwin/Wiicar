import {
  IInvoices,
  ISales,
  NamespaceTranslate,
  TPagination,
  UseMutateFunction
} from 'core';

export type TUseCreteSale = {
  setShowModal: React.Dispatch<boolean>;
  refetch: () => void;
  initialValues?: ISales;
};

export type TInputSale = {
  id?: string;
  price: number;
  quantity: number;
  region: string;
  exchangeCurrencyId: string;
};

export type TUseConfig = {
  data?: TPagination<IInvoices>;
  translate: (key: NamespaceTranslate) => string;
  handleCancelSeller: UseMutateFunction<
    IInvoices,
    Record<string, unknown>,
    {
      variables?:
        | {
            invoiceId: string;
            paymentNotReceived?: boolean | undefined;
          }
        | undefined;
      query?: Record<string, unknown> | undefined;
      params?: string[] | undefined;
    },
    unknown
  >;
  loadingCancelSeller: boolean;
};
