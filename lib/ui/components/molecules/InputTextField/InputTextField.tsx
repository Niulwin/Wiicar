import { FieldValues } from 'react-hook-form';
import { Input } from '../../atoms/Input/styled';
import { TextFieldValidationsMessage, TInputTextField } from './types';

export const InputTextField = <IFormValues extends FieldValues>({
  placeholder,
  name,
  register,
  validate,
  type,
  title,
  disabled
}: TInputTextField<IFormValues>) => {
  return (
    <Input
      {...(register
        ? register(name, {
            required: {
              message: TextFieldValidationsMessage.required,
              value: validate?.required || false
            },
            ...(validate?.numeric
              ? {
                  pattern: {
                    message: TextFieldValidationsMessage.number,
                    value: /^[0-9-.]*$/
                  }
                }
              : {})
          })
        : {})}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      type={type}
      title={title}
    />
  );
};
