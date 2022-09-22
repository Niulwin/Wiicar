import { IMethodPayments, useTranslate } from 'core';
import { FC, useState } from 'react';
import { Button, Card, Content, Modal, Table, Typography } from 'ui';
import { CreateBank } from './CreateBank';
import { useConfig, useMethodPayments } from './hooks';

export const Banks: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const translate = useTranslate();
  const { data, isLoading, refetch } = useMethodPayments();
  const { columns } = useConfig({ translate, data });

  return (
    <Content>
      <Modal
        footer={false}
        title={translate('bank.action_creator')}
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
      >
        <CreateBank setShowModal={setShowModal} refetch={refetch} />
      </Modal>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_banks')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => setShowModal(true)}
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
