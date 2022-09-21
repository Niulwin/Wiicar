import { IUserMethodPayments, TPagination, useQuery } from 'core';

export const useUserMethodPayments = () => {
  const { data, isLoading, refetch } = useQuery<
    TPagination<IUserMethodPayments>
  >('userMethodPayments', 'user-method-payments');

  return { data: data, refetch, isLoading };
};
