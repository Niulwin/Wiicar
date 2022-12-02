import { ICars, useLazyQuery } from 'core';
import { useEffect, useState } from 'react';
import { TPaginationParams, usePagination } from './usePagination';

export const useCars = () => {
  const [filter, setFilter] = useState<string>('');
  const [dataCars, setDataCars] = useState<ICars[]>([]);
  const {
    mutate: getCars,
    data: cars,
    isLoading
  } = useLazyQuery<ICars[]>('get-cars', 'get-cars');

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

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    const newFilter = cars?.sort((a, b) => {
      const wordA = a[key as 'id'] as string | number;
      const wordB = b[key as 'id'] as string | number;

      if (typeof wordA === 'string')
        return direction === 'asc'
          ? wordA.localeCompare(wordB as string)
          : (wordB as string).localeCompare(wordA);

      return direction === 'asc'
        ? a[key as 'id'] - b[key as 'id']
        : b[key as 'id'] - a[key as 'id'];
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
    handleFilter,
    handleSort,
    getCars: () => getCars({})
  };
};
