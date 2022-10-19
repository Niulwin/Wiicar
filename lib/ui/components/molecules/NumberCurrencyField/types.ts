import { Control, Path } from 'core';

export type TNumberCurrencyField<IFormValues extends object> = {
  placeholder?: string;
  name: Path<IFormValues>;
  title?: string;
  defaultValue?: any;
  value?: string | number | readonly string[];
  control?: Control<IFormValues>;
  afterChange?: (value?: number) => void;
};
