import { ISales, useTranslate } from 'core';
import { FC } from 'react';
import { Card, Content, FlexContainer, Modal, Table, Typography } from 'ui';
import { CreateSale } from 'view/mySales/CreateSale';
import { useConfig } from './hooks';

export const MyOffers: FC = () => {
  const translate = useTranslate();
  const {
    columns,
    saleSelected,
    showModal,
    handleModal,
    data,
    refetch,
    isLoading
  } = useConfig({
    translate
  });

  return (
    <Content>
      <Modal
        footer={false}
        title={translate('offers_list.action_creator')}
        isVisible={showModal}
        onCancel={() => handleModal(false)}
      >
        <CreateSale
          initialValues={saleSelected}
          setShowModal={handleModal}
          refetch={refetch}
        />
      </Modal>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_sales')} &gt;</>
        </Typography>
      </Content>
      <Card>
        <FlexContainer padding="0">
          <Table<ISales>
            loading={isLoading}
            columns={columns}
            data={data?.data || []}
            count={data?.total}
          />
        </FlexContainer>
      </Card>
    </Content>
  );
};
