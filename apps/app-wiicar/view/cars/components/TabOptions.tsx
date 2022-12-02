import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import { ICars, useTranslate } from 'core';

import { FlexContainer, Tabs } from 'ui';
import { List } from './';

export interface TTabsOptions {
  cars?: ICars[];
  handleSort: (key: string, direction: 'asc' | 'desc') => void;
}
export const TabsOptions = ({ cars, handleSort }: TTabsOptions) => {
  const translate = useTranslate();

  return (
    <FlexContainer
      direction="row"
      justify="space-between"
      align="center"
      padding="0"
    >
      <Tabs
        items={[
          {
            key: '1',
            label: (
              <FlexContainer
                padding="0"
                align="center"
                justify="center"
                direction="row"
              >
                <CarRentalOutlinedIcon fontSize="large" />
                &nbsp;&nbsp; {translate('cars.options.preparation')}
              </FlexContainer>
            ),
            children: <List handleSort={handleSort} cars={cars} />
          },
          {
            key: '2',
            label: (
              <FlexContainer
                padding="0"
                align="center"
                justify="center"
                direction="row"
              >
                <WarehouseOutlinedIcon fontSize="large" />
                &nbsp;&nbsp; {translate('cars.options.storage')}
              </FlexContainer>
            ),
            children: <List handleSort={handleSort} cars={cars} />
          },
          {
            key: '3',
            label: (
              <FlexContainer
                padding="0"
                align="center"
                justify="center"
                direction="row"
              >
                <LoyaltyOutlinedIcon fontSize="large" />
                &nbsp;&nbsp; {translate('cars.options.for_sale')}
              </FlexContainer>
            ),
            children: <List handleSort={handleSort} cars={cars} />
          },
          {
            key: '4',
            label: (
              <FlexContainer
                padding="0"
                align="center"
                justify="center"
                direction="row"
              >
                <LocalAtmOutlinedIcon fontSize="large" />
                &nbsp;&nbsp; {translate('cars.options.sales')}
              </FlexContainer>
            ),
            children: <List handleSort={handleSort} cars={cars} />
          }
        ]}
      />
    </FlexContainer>
  );
};
