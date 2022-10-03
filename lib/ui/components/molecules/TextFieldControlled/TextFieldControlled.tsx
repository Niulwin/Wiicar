import { Controller, FieldValues } from 'react-hook-form';
import { TTextFieldControlled } from './types';

export const TextFieldControlled = <
  IFormValues extends FieldValues,
  TValue extends Record<string, unknown>
>({
  placeholder,
  label,
  name,
  defaultValue,
  width,
  register,
  validate,
  error,
  control,
  format
}: TTextFieldControlled<IFormValues, TValue>) => {
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <input
          onChange={(e) =>
            field.onChange(format ? format(e.target.value, e) : e)
          }
          value={format ? format(field.value) : field.value}
        />
      )}
    />
  );
};
