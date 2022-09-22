import type { FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEventHandler } from 'react';

export type TTextField<IFormValues extends object> = {
  placeholder?: string;
  label: string;
  name: Path<IFormValues>;
  width?: string;
  error?: FieldError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
    numeric?: boolean;
  };
};

export enum TextFieldValidationsMessage {
  required = 'global.error.input.required',
  number = 'global.error.input.numeric'
}
