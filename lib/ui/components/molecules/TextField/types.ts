import { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { Control, FieldError, Path, UseFormRegister } from 'core/form';
import { ChangeEvent, CSSProperties, MouseEvent } from 'react';

export type TTextField<IFormValues extends object> = {
  placeholder?: string;
  label?: string;
  className?: string;
  iconRight?: {
    name: IconProp;
    onClick?: (ev: MouseEvent<SVGSVGElement>) => void;
  };
  style?: CSSProperties;
  inputProps?: {
    style?: CSSProperties;
  };
  name: Path<IFormValues>;
  type?: 'number' | 'text' | 'phone' | 'password' | 'currency';
  width?: string;
  title?: string;
  disabled?: boolean;
  error?: FieldError;
  defaultValue?: any;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  afterChange?: (value?: number) => void;
  register?: UseFormRegister<IFormValues>;
  control?: Control<IFormValues>;
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
