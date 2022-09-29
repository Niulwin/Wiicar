import { useState } from 'react';
import { FlexContainer, ModalFooter, SelectField, TextField } from 'ui';
import { useMethodPayments } from 'view/banks/hooks';
import { useTranslate } from '../../../../lib/core/i18n/hooks/useTranslate';
import { TUseCreateAccount, useCreateAccount } from './hooks';

export const CreateAccount = ({ setShowModal, refetch }: TUseCreateAccount) => {
  const translate = useTranslate();
  const { errors, handleSubmit, isLoading, register } = useCreateAccount({
    setShowModal,
    refetch
  });
  const { data } = useMethodPayments();

  const [typeOptionsAccounts] = useState([
    { value: 'Ahorro', label: translate('my_accounts.saving_account') },
    { value: 'Corriente', label: translate('my_accounts.current_account') }
  ]);

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer justify="space-between" direction="row">
        <SelectField
          label={translate('my_accounts.method_payment')}
          name="methodPaymentId"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('my_accounts.method_payment')}
          error={errors.methodPaymentId}
          options={
            data?.data?.map((bank) => ({
              value: bank.id,
              label: `${bank.code}-${bank.name}`
            })) || []
          }
        />
        <SelectField
          label={translate('my_accounts.method_payment_type')}
          name="typeAccount"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('my_accounts.method_payment_type')}
          error={errors.typeAccount}
          options={typeOptionsAccounts}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row">
        <TextField
          label={translate('my_accounts.code')}
          name="value"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('my_accounts.code')}
          error={errors.value}
        />
        <TextField
          label={translate('my_accounts.identification')}
          name="identification_card"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('my_accounts.identification')}
          error={errors.identification_card}
        />
      </FlexContainer>
      <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
    </form>
  );
};
