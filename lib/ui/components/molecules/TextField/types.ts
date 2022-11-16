import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NamespaceCountryCode } from 'core';
import type { Control, FieldError, Path, UseFormRegister } from 'core/form';
import { MouseEvent } from 'react';

export type TTextField<IFormValues extends object> = {
  placeholder?: string;
  label: string;
  iconRight?: {
    name: IconProp;
    onClick?: (ev: MouseEvent<SVGSVGElement>) => void;
  };
  name: Path<IFormValues>;
  type?: 'number' | 'text' | 'phone' | 'password' | 'currency';
  width?: string;
  title?: string;
  disabled?: boolean;
  noLabel?: boolean;
  error?: FieldError;
  countryCode?: NamespaceCountryCode;
  defaultValue?: any;
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
