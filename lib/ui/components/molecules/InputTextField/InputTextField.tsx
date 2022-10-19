import { FieldValues } from 'react-hook-form';
import { Input } from './styled';
import { TextFieldValidationsMessage, TInputTextField } from './types';

export const InputTextField = <IFormValues extends FieldValues>({
  placeholder,
  name,
  register,
  validate,
  type,
  title
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
      placeholder={placeholder}
      name={name}
      type={type}
      title={title}
    />
  );
};
