import { ICars, useQuery } from 'core';
import { useEffect, useState } from 'react';
import { TPaginationParams, usePagination } from './usePagination';

export const useCars = () => {
  const [filter, setFilter] = useState<string>('');
  const [dataCars, setDataCars] = useState<ICars[]>([]);
  const { data: cars, isLoading } = useQuery<ICars[]>('get-cars', 'get-cars');

  const { paginationParams, setPaginationParams } = usePagination();

  useEffect(() => {
    setPaginationParams({
      ...paginationParams,
      totalCount: cars?.length || 0
    });
  }, [cars]);

  useEffect(() => {
    setDataCars(
      cars?.slice(
        (paginationParams.offset - 1) * paginationParams.limit,
        paginationParams.limit * paginationParams.offset
      ) || []
    );
  }, [paginationParams]);

  const handlePaginationParams = (args: TPaginationParams) =>
    setPaginationParams(args);

  const handleFilter = (text: string) => {
    setFilter(text);
    const newFilter: ICars[] = [];
    cars?.forEach((car) => {
      let flag = false;
      for (let key in car) {
        if (
          !!car[key as 'id']
            ?.toString()
            .toLowerCase()
            ?.includes(text?.toLocaleLowerCase())
        ) {
          newFilter.push(car);
        }
      }
      return flag;
    });
    setDataCars(
      newFilter?.slice(
        (paginationParams.offset - 1) * paginationParams.limit,
        paginationParams.limit * paginationParams.offset
      ) || []
    );
  };

  return {
    cars: dataCars,
    isLoading,
    paginationParams,
    handlePaginationParams,
    filter,
    handleFilter
  };
};
