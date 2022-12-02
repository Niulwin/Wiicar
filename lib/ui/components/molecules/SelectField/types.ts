import { NamespaceTranslate } from 'core';
import type { FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEventHandler } from 'react';

export type TSelectField<IFormValues extends object> = {
  placeholder?: NamespaceTranslate;
  label?: string;
  name: Path<IFormValues>;
  width?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  error?: FieldError;
  options: { value: string | number; label: string }[];
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
  };
};

export const SelectFieldValidationsMessage = {
  required: 'global.errors.input.required',
  number: 'global.errors.input.numeric'
};
