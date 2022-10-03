import { IInvoices, useTranslate } from 'core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button, Card, Content, FlexContainer, Table, Typography } from 'ui';
import { useConfig, useInvoices } from './hooks';

export const MyShopping: FC = () => {
  const translate = useTranslate();
  const { data, isLoading, handleCancelBuyer, loadingCancelBuyer } =
    useInvoices({ translate });
  const router = useRouter();
  const { columns } = useConfig({
    translate,
    handleCancelBuyer,
    loadingCancelBuyer
  });

  return (
    <Content>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_shopping')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => router.push('offer-list')}
          title={translate('my_shopping.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <Card>
        <FlexContainer padding="0">
          <Table<IInvoices>
            loading={isLoading}
            columns={columns}
            data={data?.data || []}
          />
        </FlexContainer>
      </Card>
    </Content>
  );
};
