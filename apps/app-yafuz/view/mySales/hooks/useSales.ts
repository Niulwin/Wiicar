import { ISales, TPagination, useQuery } from 'core';

export const useSales = () => {
  const { data, isLoading } = useQuery<TPagination<ISales>>('sales', 'sales');

  return { data: data, isLoading };
};
