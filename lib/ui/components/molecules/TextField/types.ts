import type { FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEventHandler } from 'react';

export type TTextField<IFormValues extends object> = {
  placeholder?: string;
  label: string;
  name: Path<IFormValues>;
  type?: 'number' | 'text';
  width?: string;
  title?: string;
  error?: FieldError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
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
