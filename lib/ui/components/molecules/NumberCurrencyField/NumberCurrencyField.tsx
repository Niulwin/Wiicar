import { Controller, FieldValues } from 'core';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { Input } from '../../atoms';
import { TNumberCurrencyField } from './types';

export const NumberCurrencyField = <IFormValues extends FieldValues>({
  placeholder,
  name,
  defaultValue,
  title,
  control,
  afterChange
}: TNumberCurrencyField<IFormValues>) => {
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <NumberFormat
          name={field.name}
          thousandSeparator
          placeholder={placeholder}
          title={title}
          customInput={Input}
          onValueChange={({ floatValue }: NumberFormatValues) => {
            field.onChange({ target: { value: floatValue } });
            afterChange && afterChange(floatValue);
          }}
          value={field.value}
          autoComplete="off"
        />
      )}
    />
  );
};
