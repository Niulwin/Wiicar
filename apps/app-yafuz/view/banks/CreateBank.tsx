import { HalfAccounts, useI18n, useTranslate } from 'core';
import { FlexContainer, ModalFooter, SelectField, TextField } from 'ui';
import { useCreateBank } from './hooks';
import { TUseCreteBank } from './hooks/types';

export const CreateBank = ({ setShowModal, refetch }: TUseCreteBank) => {
  const translate = useTranslate();
  const { errors, handleSubmit, isLoading, register, dataCountries } =
    useCreateBank({
      setShowModal,
      refetch
    });
  const { language } = useI18n();

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer justify="space-between" direction="column">
        <SelectField
          label={translate('bank.country')}
          name="region"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder={translate('bank.country')}
          error={errors.region}
          options={
            dataCountries?.map((country) => ({
              value: country.id,
              label: language === 'es' ? country?.nombre : country.name
            })) || []
          }
        />
        <SelectField
          label={translate('bank.half_account')}
          name="halfAccount"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder={translate('bank.half_account')}
          error={errors.halfAccount}
          options={
            HalfAccounts?.map((halfAccount) => ({
              value: halfAccount,
              label: translate(`bank.half_account_enum.${halfAccount}`)
            })) || []
          }
        />
        <FlexContainer justify="space-between" direction="row" padding="0">
          <TextField
            label={translate('bank.code')}
            name="code"
            register={register}
            validate={{ required: true }}
            width="49%"
            placeholder={translate('bank.code')}
            error={errors.code}
          />
          <TextField
            label={translate('bank.name')}
            name="name"
            register={register}
            validate={{ required: true }}
            width="49%"
            placeholder={translate('bank.name')}
            error={errors.name}
          />
        </FlexContainer>
      </FlexContainer>
      <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
    </form>
  );
};
