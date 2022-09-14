import { IUserMethodPayments, TPagination, useQuery } from 'core';

export const useUserMethodPayments = () => {
  const { data, isLoading } = useQuery<TPagination<IUserMethodPayments>>(
    'userMethodPayments',
    'user-method-payments'
  );

  return { data: data, isLoading };
};
