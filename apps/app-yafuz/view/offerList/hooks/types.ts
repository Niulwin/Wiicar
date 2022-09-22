import { IInvoices, ISales, TPagination, UseMutateFunction } from 'core';

export type TUseConfig = {
  data?: TPagination<ISales>;
  translate: (key: string) => string;
  handleRequest: UseMutateFunction<
    { data: IInvoices },
    { error: boolean },
    { salesId: string },
    unknown
  >;
  loadingRequest: boolean;
};
