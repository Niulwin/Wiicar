import type { FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEvent, ChangeEventHandler } from 'react';

export type TTextFieldControlled<IFormValues extends object, TValue> = {
  placeholder?: string;
  label: string;
  name: Path<IFormValues>;
  width?: string;
  error?: FieldError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: any;
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
    numeric?: boolean;
  };
  control?: any;
  format?: (value: any, event?: ChangeEvent<HTMLInputElement>) => any;
};

export const TextFieldControlledValidationsMessage = {
  required: 'global.errors.input.required',
  number: 'global.errors.input.numeric'
};
