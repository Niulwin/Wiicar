import { useTranslate } from 'core';
import { useState } from 'react';
import { FlexContainer, SelectField, TextField } from 'ui';
import { IBankTransferForm } from './types';

export const BankTransferForm = ({ register, errors }: IBankTransferForm) => {
  const translate = useTranslate();
  const [typeOptionsAccounts] = useState([
    { value: 'Ahorro', label: translate('my_accounts.saving_account') },
    { value: 'Corriente', label: translate('my_accounts.current_account') }
  ]);

  return (
    <>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.bank_name')}
          name="name"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.name}
        />
        <SelectField
          label={translate('my_accounts.fields.account_type')}
          name="accountType"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.accountType}
          options={typeOptionsAccounts}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.account_number')}
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
          name="identificationCard"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder=""
          error={errors.identificationCard}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 16px">
        <TextField
          label={translate('my_accounts.fields.contact_method')}
          name="accountNumber"
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
