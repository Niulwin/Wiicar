import { IUserMethodPayments, useTranslate } from 'core';
import { FC } from 'react';
import { Button, Card, Content, FlexContainer, Table, Typography } from 'ui';
import { useUserMethodPayments } from './hooks';
import { useConfig } from './hooks/useConfig';

export const MyAccountsView: FC = () => {
  const { data, isLoading } = useUserMethodPayments();
  const translate = useTranslate();
  const { columns } = useConfig({ translate });

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_accounts')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => console.log('w')}
          title={translate('offers_list.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <FlexContainer padding="0">
        <Card>
          <Table<IUserMethodPayments>
            loading={isLoading}
            columns={columns}
            data={data?.data || []}
          />
        </Card>
      </FlexContainer>
    </Content>
  );
};
