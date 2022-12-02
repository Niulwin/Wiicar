import { useTranslate } from 'core';
import { FC } from 'react';
import { FlexContainer, Loading, Modal, Typography } from 'ui';
import { AppBarActions, TabsOptions } from './components';
import { useCars } from './hooks';

export const Cars: FC = () => {
  const {
    cars,
    isLoading,
    handleSort,
    paginationParams,
    handlePaginationParams,
    filter,
    handleFilter,
    getCars
  } = useCars();
  const translate = useTranslate();

  return (
    <>
      <Modal title="cars.loading" isVisible={isLoading}>
        <FlexContainer direction="row">
          <FlexContainer sm="3" padding="0">
            <Loading color="textPrimary" />
          </FlexContainer>
          <FlexContainer sm="9" padding="0" align="flex-start">
            <Typography color="disabled" variant="body1">
              {translate('cars.actions.bulk_upload')}
            </Typography>
            <Typography color="textPrimary" variant="body1">
              {translate('cars.loading_message')}
            </Typography>
          </FlexContainer>
        </FlexContainer>
      </Modal>
      <TabsOptions cars={cars} handleSort={handleSort} />
      <AppBarActions
        {...paginationParams}
        getCars={getCars}
        filter={filter}
        handleFilter={handleFilter}
        handlePaginationParams={handlePaginationParams}
      />
    </>
  );
};
