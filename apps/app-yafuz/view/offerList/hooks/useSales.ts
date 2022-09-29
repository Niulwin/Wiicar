import { ISales, TPagination, useQuery } from 'core';
export const useSales = () => {
  const { data, isLoading, refetch } = useQuery<TPagination<ISales>>(
    'sales',
    'sales'
  );

  return {
    data: data,
    refetch,
    isLoading
  };
};
