import { IMethodPayments, TPagination, useQuery } from 'core';

export const useMethodPayments = () => {
  const { data, isLoading, refetch } = useQuery<TPagination<IMethodPayments>>(
    'invoices',
    'validate',
    { type: 'buyer' }
  );

  return { data: data, refetch, isLoading };
};
