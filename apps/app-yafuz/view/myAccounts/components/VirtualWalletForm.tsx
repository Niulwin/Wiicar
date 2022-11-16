import { useTranslate } from 'core';
import { FlexContainer, TextField } from 'ui';
import { IBankTransferForm } from './types';

export const VirtualWalletForm = ({ register, errors }: IBankTransferForm) => {
  const translate = useTranslate();
  return (
    <>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.virtual_wallet_name')}
          name="name"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder=""
          error={errors.name}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.user_number')}
          name="accountNumber"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder=""
          error={errors.accountNumber}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.identification_card')}
          name="identificationCard"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.identificationCard}
        />
        <TextField
          label={translate('my_accounts.fields.account_holder')}
          name="accountHolder"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.accountHolder}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.contact_method')}
          name="contactMethod"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.contactMethod}
        />
        <TextField
          label={translate('my_accounts.fields.contact_user')}
          name="contactUser"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.contactUser}
        />
      </FlexContainer>
    </>
  );
};
