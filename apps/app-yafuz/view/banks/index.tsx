import { IMethodPayments, useTranslate } from 'core';
import { FC } from 'react';
import { Button, Card, Content, Table, Typography } from 'ui';
import { useConfig, useMethodPayments } from './hooks';

export const BanksView: FC = () => {
  const translate = useTranslate();
  const { data, isLoading } = useMethodPayments();
  const { columns } = useConfig({ translate });

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_banks')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => console.log('w')}
          title={translate('bank.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <Card>
        <Table<IMethodPayments>
          loading={isLoading}
          columns={columns}
          data={data?.data || []}
        />
      </Card>
    </Content>
  );
};
