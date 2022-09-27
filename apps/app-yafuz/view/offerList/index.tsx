import { ISales, useTranslate } from 'core';
import { FC, useState } from 'react';
import { Button, Content, FlexContainer, Modal, Table, Typography } from 'ui';
import { CreateSale } from 'view/mySales/CreateSale';
import { RequestOffer } from './components';
import { useConfig, useSales } from './hooks';

export const OfferList: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalBuy, setShowModalBuy] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({} as ISales);
  const translate = useTranslate();
  const { data, isLoading, refetch } = useSales();
  const { columns } = useConfig({
    translate,
    data,
    handleShowRequestOperation: (offer) => {
      setSelectedOffer(offer);
      setShowModalBuy(true);
    }
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
      <Modal
        footer={false}
        title={translate('offers_list.buy')}
        isVisible={showModalBuy}
        size="normal"
        onCancel={() => setShowModalBuy(false)}
      >
        <RequestOffer
          onCompleted={() => {
            refetch();
            setShowModalBuy(false);
          }}
          onCancel={() => setShowModalBuy(false)}
          selectedOffer={selectedOffer}
          isLoading={false}
        />
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
      <FlexContainer padding="0" style={{ maxWidth: '1220px', margin: 'auto' }}>
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
