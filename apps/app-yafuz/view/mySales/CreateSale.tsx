import { formatCurrency, useI18n, useTranslate } from 'core';
import { useEffect } from 'react';
import {
  FlexContainer,
  ModalFooter,
  SelectField,
  TextField,
  Typography
} from 'ui';
import { useExchangeCurrency } from 'view/exchangeCurrencies/hooks';
import { TUseCreteSale, useCreateSale } from './hooks';

export const CreateSale = ({
  setShowModal,
  refetch,
  initialValues
}: TUseCreteSale) => {
  const translate = useTranslate();
  const { language } = useI18n();
  const {
    errors,
    handleSubmit,
    isLoading,
    register,
    reset,
    dataBalance,
    dataCountries
  } = useCreateSale({
    setShowModal,
    refetch,
    initialValues
  });
  const { dataExchangeCurrencies } = useExchangeCurrency({
    countryId: '61f985d8418db6c7559d73bf'
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer
        justify="space-between"
        direction="row"
        position="relative"
        padding="0 8px"
      >
        <div style={{ position: 'relative', width: '59%' }}>
          <TextField
            label={translate('my_sales.fields.quantity')}
            name="quantity"
            validate={{ required: true, numeric: true }}
            register={register}
            width="100%"
            placeholder="1.000"
            error={errors.quantity}
          />
          <div style={{ top: 10, right: '5px', position: 'absolute' }}>
            <Typography variant="caption3" color="info">
              max:
              {formatCurrency(dataBalance?.balance ?? 100000, '0,00[.]00')}
            </Typography>
          </div>
        </div>
        <SelectField
          label={translate('my_sales.fields.exchange_currencies')}
          name="exchangeCurrencyId"
          register={register}
          validate={{ required: true }}
          width="40%"
          placeholder={translate('my_accounts.method_payment')}
          error={errors.exchangeCurrencyId}
          options={
            dataExchangeCurrencies?.map((exchangeCurrency) => ({
              value: exchangeCurrency.id,
              label: `${exchangeCurrency?.name} (${exchangeCurrency.prefix})`
            })) || []
          }
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 8px">
        <TextField
          label={translate('my_sales.price')}
          name="price"
          register={register}
          validate={{ required: true, numeric: true }}
          width="100%"
          placeholder="1.000"
          error={errors.price}
        />
      </FlexContainer>
      <FlexContainer justify="space-between" direction="row" padding="0 8px">
        <SelectField
          label={translate('my_sales.fields.region')}
          name="region"
          register={register}
          validate={{ required: true }}
          width="100%"
          placeholder=""
          error={errors.region}
          options={
            dataCountries?.map((country) => ({
              value: country.id,
              label: language === 'es' ? country?.nombre : country?.name
            })) || []
          }
        />
      </FlexContainer>
      <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
    </form>
  );
};
