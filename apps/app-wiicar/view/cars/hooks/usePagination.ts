import { useState } from 'react';

export type TPaginationParams = {
  offset: number;
  limit: number;
  totalCount: number;
};

export const usePagination = () => {
  const [paginationParams, setPaginationParams] = useState<TPaginationParams>({
    offset: 1,
    limit: 25,
    totalCount: 0
  });

  return {
    paginationParams,
    setPaginationParams
  };
};
