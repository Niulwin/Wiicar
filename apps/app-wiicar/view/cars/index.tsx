import { FC } from 'react';
import { AppBarActions, TabsOptions } from './components';
import { useCars } from './hooks';

export const Cars: FC = () => {
  const {
    cars,
    isLoading,
    paginationParams,
    handlePaginationParams,
    filter,
    handleFilter
  } = useCars();
  return (
    <>
      <TabsOptions cars={cars} />
      <AppBarActions
        {...paginationParams}
        filter={filter}
        handleFilter={handleFilter}
        handlePaginationParams={handlePaginationParams}
      />
    </>
  );
};
