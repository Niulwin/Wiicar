import { IInvoices, TPagination, useQuery } from 'core';

export const useInvoices = () => {
  const { data, isLoading } = useQuery<TPagination<IInvoices>>(
    'invoices',
    'invoices'
  );

  return { data: data, isLoading };
};
