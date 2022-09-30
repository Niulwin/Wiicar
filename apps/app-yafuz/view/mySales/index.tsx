import { IInvoices, useTranslate } from 'core';
import { FC, useState } from 'react';
import { Button, Content, FlexContainer, Modal, Table, Typography } from 'ui';
import { CreateSale } from './CreateSale';
import { useConfig, useSales } from './hooks';

export const MySalesView: FC = () => {
  const translate = useTranslate();
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, refetch, handleCancelSeller, loadingCancelSeller } =
    useSales({ translate });
  const { columns } = useConfig({
    translate,
    data,
    handleCancelSeller,
    loadingCancelSeller
  });

  return (
    <Content>
      <Modal
        footer={false}
        title={translate('offers_list.action_creator')}
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
      >
        <CreateSale setShowModal={setShowModal} refetch={refetch} />
      </Modal>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_sales')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => setShowModal(true)}
          title={translate('offers_list.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <FlexContainer padding="0">
        <Table<IInvoices>
          loading={isLoading}
          columns={columns}
          data={data?.data || []}
          count={data?.total}
        />
      </FlexContainer>
    </Content>
  );
};
