import { useTranslate } from 'core';
import { FlexContainer, ModalFooter, SelectField, TextField } from 'ui';
import { useUserMethodPayments } from 'view/myAccounts/hooks';
import { TUseCreteSale, useCreateSale } from './hooks';

export const CreateSale = ({ setShowModal, refetch }: TUseCreteSale) => {
  const translate = useTranslate();
  const { errors, handleSubmit, isLoading, register } = useCreateSale({
    setShowModal,
    refetch
  });
  const { data } = useUserMethodPayments();

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer justify="space-between" direction="row">
        <TextField
          label={`${translate('my_sales.price')} USDT`}
          name="price"
          register={register}
          validate={{ required: true, numeric: true }}
          width="49%"
          placeholder={translate('my_sales.price')}
          error={errors.price}
        />
        <TextField
          label={`${translate('my_sales.quantity')} YAZ`}
          name="quantity"
          validate={{ required: true, numeric: true }}
          register={register}
          width="49%"
          placeholder={translate('my_sales.quantity')}
          error={errors.quantity}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row">
        <SelectField
          label={translate('my_accounts.method_payment')}
          name="userMethodPaymentId"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder={translate('my_accounts.method_payment')}
          error={errors.userMethodPaymentId}
          options={
            data?.data?.map((userMethodPayment) => ({
              value: userMethodPayment.id,
              label: `${userMethodPayment.methodPayment?.name}-${userMethodPayment.value}`
            })) || []
          }
        />
      </FlexContainer>
      <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
    </form>
  );
};
