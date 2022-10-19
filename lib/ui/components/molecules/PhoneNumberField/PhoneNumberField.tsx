import { Controller, FieldValues, phoneTransformToInternational } from 'core';
import { Input } from '../../atoms';
import { TPhoneNumberField } from './types';

export const PhoneNumberField = <IFormValues extends FieldValues>({
  placeholder,
  name,
  defaultValue,
  title,
  control,
  countryCode
}: TPhoneNumberField<IFormValues>) => {
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          name={name}
          placeholder={placeholder}
          title={title}
          onChange={(e) => field.onChange(e.target.value)}
          value={phoneTransformToInternational(field.value || '', countryCode)}
        />
      )}
    />
  );
};
