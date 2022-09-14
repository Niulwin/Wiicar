import { IInvoices, useTranslate } from 'core';
import { FC } from 'react';
import { Button, Content, FlexContainer, Table, Typography } from 'ui';
import { useConfig, useInvoices } from './hooks';

export const MyShoppingView: FC = () => {
  const { data, isLoading } = useInvoices();
  const translate = useTranslate();
  const { columns } = useConfig({ translate });

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_shopping')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => console.log('w')}
          title={translate('my_shopping.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <FlexContainer padding="0">
        <Table<IInvoices>
          loading={isLoading}
          columns={columns}
          data={data?.data || []}
        />
      </FlexContainer>
    </Content>
  );
};
