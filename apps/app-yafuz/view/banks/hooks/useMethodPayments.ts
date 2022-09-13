import { TMethodPayments, TPagination, useQuery } from 'core';

export const useMethodPayments = () => {
  const { data, isLoading } = useQuery<TPagination<TMethodPayments>>(
    'methodPayments',
    'methodPayments'
  );

  return { data: data, isLoading };
};
