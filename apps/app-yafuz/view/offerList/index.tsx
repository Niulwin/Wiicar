import { ISales, useTranslate } from 'core';
import { FC, useState } from 'react';
import { Button, Content, FlexContainer, Modal, Table, Typography } from 'ui';
import { CreateSale } from 'view/mySales/CreateSale';
import { useConfig, useSales } from './hooks';

export const OfferList: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const translate = useTranslate();
  const { data, isLoading, refetch, handleRequest, loadingRequest } = useSales({
    translate
  });
  const { columns } = useConfig({
    translate,
    data,
    handleRequest,
    loadingRequest
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
          <>{translate('global.menu_options.offers_list')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => setShowModal(true)}
          title={translate('offers_list.action_creator')}
          iconLeft="plus"
        />
      </Content>
      <FlexContainer padding="0">
        <Table<ISales>
          loading={isLoading}
          columns={columns}
          data={data?.data || []}
          count={data?.total}
        />
      </FlexContainer>
    </Content>
  );
};
