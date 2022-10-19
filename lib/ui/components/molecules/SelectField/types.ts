import type { FieldError, Path, UseFormRegister } from 'core/form';

export type TSelectField<IFormValues extends object> = {
  placeholder?: string;
  label: string;
  name: Path<IFormValues>;
  width?: string;
  error?: FieldError;
  options: { value: string; label: string }[];
  register?: UseFormRegister<IFormValues>;
  validate?: {
    required?: boolean;
  };
};

export const SelectFieldValidationsMessage = {
  required: 'global.errors.input.required',
  number: 'global.errors.input.numeric'
};
