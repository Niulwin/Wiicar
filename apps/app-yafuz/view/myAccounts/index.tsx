import { IUserMethodPayments, useTranslate } from 'core';
import { FC, useState } from 'react';
import {
  Button,
  Card,
  Content,
  FlexContainer,
  Modal,
  Table,
  Typography
} from 'ui';
import { CreateAccount } from './CreateAccount';
import { useUserMethodPayments } from './hooks';
import { useConfig } from './hooks/useConfig';

export const MyAccountsView: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const translate = useTranslate();
  const { data, isLoading, refetch } = useUserMethodPayments();
  const { columns } = useConfig({ translate, data });

  return (
    <Content>
      <Modal
        footer={false}
        title={translate('offers_list.action_creator')}
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
      >
        <CreateAccount setShowModal={setShowModal} refetch={refetch} />
      </Modal>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_accounts')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => setShowModal(true)}
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
