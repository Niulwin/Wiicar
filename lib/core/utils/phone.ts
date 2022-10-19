import parsePhoneNumber, { CountryCode } from 'libphonenumber-js';

export const phoneValidation = (value: string, countryCode: CountryCode) => {
  const numberPhone = parsePhoneNumber(value, countryCode);
  if (!numberPhone?.isValid()) return false;

  return true;
};

export const phoneTransformToInternational = (
  value: string,
  countryCode: CountryCode
) => {
  const numberPhone = parsePhoneNumber(value, countryCode);
  return numberPhone?.formatInternational();
};

export type NamespaceCountryCode = CountryCode;
