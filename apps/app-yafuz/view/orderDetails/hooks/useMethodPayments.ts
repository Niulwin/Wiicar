import { IMethodPayments, TPagination, useQuery } from 'core';

export const useMethodPayments = () => {
  const { data, isLoading, refetch } = useQuery<
    TPagination<IMethodPayments>,
    { type: string }
  >('invoices', 'validate', { variables: { type: 'buyer' } });

  return { data: data, refetch, isLoading };
};
