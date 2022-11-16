import { HalfAccount, useI18n, useTranslate } from 'core';
import { FlexContainer, ModalFooter, SelectField } from 'ui';
import {
  BankTransferForm,
  CertifiedTurnForm,
  CryptoWalletForm,
  InternalBalanceForm,
  VirtualWalletForm
} from './components';
import { TUseCreateAccount, useCreateAccount } from './hooks';

export const CreateAccount = ({
  setShowModal,
  refetch,
  initialValue
}: TUseCreateAccount) => {
  const translate = useTranslate();
  const {
    errors,
    handleSubmit,
    isLoading,
    register,
    dataCountries,
    dataMethodPayments,
    methodPaymentSelected
  } = useCreateAccount({
    setShowModal,
    refetch,
    initialValue
  });

  const { language } = useI18n();

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer justify="space-between" direction="row">
        <SelectField
          label={translate('bank.country')}
          name="region"
          register={register}
          validate={{ required: true }}
          width="50%"
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
          label={translate('my_accounts.method_payment')}
          name="methodPaymentId"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('my_accounts.method_payment')}
          error={errors.methodPaymentId}
          options={
            dataMethodPayments?.map((bank) => ({
              value: bank.id,
              label: `${bank.code}-${bank.name}`
            })) || []
          }
        />
      </FlexContainer>
      {methodPaymentSelected?.halfAccount === HalfAccount.BankTransfer && (
        <BankTransferForm errors={errors} register={register} />
      )}
      {methodPaymentSelected?.halfAccount === HalfAccount.CertifiedTurn && (
        <CertifiedTurnForm errors={errors} register={register} />
      )}
      {methodPaymentSelected?.halfAccount === HalfAccount.CryptoWallet && (
        <CryptoWalletForm errors={errors} register={register} />
      )}
      {methodPaymentSelected?.halfAccount === HalfAccount.InternalBalance && (
        <InternalBalanceForm errors={errors} register={register} />
      )}
      {methodPaymentSelected?.halfAccount === HalfAccount.VirtualWallet && (
        <VirtualWalletForm errors={errors} register={register} />
      )}
      {!initialValue && (
        <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
      )}
    </form>
  );
};
