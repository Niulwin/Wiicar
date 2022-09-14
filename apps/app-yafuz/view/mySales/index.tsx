import { ISales, useTranslate } from 'core';
import { FC } from 'react';
import { Button, Content, FlexContainer, Table, Typography } from 'ui';
import { useConfig, useSales } from './hooks';

export const MySalesView: FC = () => {
  const { data, isLoading } = useSales();
  const translate = useTranslate();
  const { columns } = useConfig({ translate });

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_sales')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => console.log('w')}
          title={translate('offers_list.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <FlexContainer padding="0">
        <Table<ISales>
          loading={isLoading}
          columns={columns}
          data={data?.data || []}
        />
      </FlexContainer>
    </Content>
  );
};
