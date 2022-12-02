import type { Path, UseFormRegister } from 'core/form';
import { ChangeEvent, CSSProperties } from 'react';

export type TInputTextField<IFormValues extends object> = {
  placeholder?: string;
  disabled?: boolean;
  name: Path<IFormValues>;
  type?: 'number' | 'text' | 'password' | 'phone' | 'currency';
  title?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
    numeric?: boolean;
    pattern?: RegExp;
  };
  style?: CSSProperties;
};
export const TextFieldValidationsMessage = {
  required: 'global.errors.input.required',
  number: 'global.errors.input.numeric'
};
