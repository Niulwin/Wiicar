import { useTranslate } from 'core';
import { FC } from 'react';
import { Button, Card, Content, Table, Typography } from 'ui';
import { useMethodPayments } from './hooks/useMethodPayments';

const columns = [
  {
    title: 'code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
];

export const BanksView: FC = () => {
  const translate = useTranslate();
  const { data, isLoading } = useMethodPayments();

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_banks')} &gt;</>
        </Typography>
        <Button
          onClick={() => console.log('w')}
          title={translate('bank.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <Card>
        <Table
          loading={isLoading}
          columns={columns}
          rowKey={(row) => row.id}
          data={data?.data || []}
        />
      </Card>
    </Content>
  );
};
