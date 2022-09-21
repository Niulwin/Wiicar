import { IMethodPayments, TPagination, useQuery } from 'core';

export const useMethodPayments = () => {
  const { data, isLoading, refetch } = useQuery<TPagination<IMethodPayments>>(
    'methodPayments',
    'method-payments'
  );

  return { data: data, refetch, isLoading };
};
