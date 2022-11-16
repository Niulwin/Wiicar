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

export const MyAccounts: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const translate = useTranslate();
  const {
    data,
    isLoading,
    refetch,
    handleEdit,
    clearInitialValues,
    userMethodPaymentSelected
  } = useUserMethodPayments();
  const { columns } = useConfig({
    translate,
    data,
    handleEdit: (row) => {
      setShowModal(true);
      handleEdit(row);
    }
  });

  return (
    <FlexContainer>
      <Modal
        footer={false}
        title={translate('my_accounts.action_creator')}
        isVisible={showModal}
        onCancel={() => {
          setShowModal(false);
          clearInitialValues();
        }}
      >
        <CreateAccount
          setShowModal={setShowModal}
          refetch={refetch}
          initialValue={userMethodPaymentSelected}
        />
      </Modal>
      <Content noPadding direction="row" justify="space-between" align="center">
        <Typography variant="h6">
          <>{translate('global.menu_options.my_accounts')} &gt;</>
        </Typography>
        <Button
          color="light"
          onClick={() => setShowModal(true)}
          title={translate('my_accounts.action_creator')}
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
    </FlexContainer>
  );
};
