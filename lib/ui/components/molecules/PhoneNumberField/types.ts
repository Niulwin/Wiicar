import { Control, NamespaceCountryCode, Path } from 'core';

export type TPhoneNumberField<IFormValues extends object> = {
  placeholder?: string;
  name: Path<IFormValues>;
  title?: string;
  defaultValue?: any;
  countryCode: NamespaceCountryCode;
  value?: string | number | readonly string[];
  control?: Control<IFormValues>;
};
