import type { FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEventHandler } from 'react';

export type TSelectField<IFormValues extends object> = {
  placeholder?: string;
  label: string;
  name: Path<IFormValues>;
  width?: string;
  error?: FieldError;
  options: { value: string; label: string }[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string | number | readonly string[];
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
  };
};

export const SelectFieldValidationsMessage = {
  required: 'global.error.input.required',
  number: 'global.error.input.numeric'
};
