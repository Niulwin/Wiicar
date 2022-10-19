import type { Path, UseFormRegister } from 'core/form';

export type TInputTextField<IFormValues extends object> = {
  placeholder?: string;
  name: Path<IFormValues>;
  type?: 'number' | 'text' | 'password' | 'phone' | 'currency';
  title?: string;
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
    numeric?: boolean;
    pattern?: RegExp;
  };
};
export const TextFieldValidationsMessage = {
  required: 'global.errors.input.required',
  number: 'global.errors.input.numeric'
};
