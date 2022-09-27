import numeral from 'numeral';
export type TNumeralConfigOptions = {
  delimiters?: {
    thousands?: string;
    decimal?: string;
  };
  abbreviations?: {
    thousand?: string;
    million?: string;
    billion?: string;
    trillion?: string;
  };
  currency?: {
    symbol?: '$';
  };
};

export const numeralConfig = (
  locale = 'co',
  options = {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    currency: {
      symbol: '$'
    },
    ordinal: (number: number) => (number === 1 ? 'er' : 'eme')
  }
) => {
  if (numeral.locales[locale] === undefined) {
    numeral.register('locale', locale, options);
    numeral.locale('co');
  }
};

export const formatCurrency = (value?: number): string | number => {
  return value ? numeral(value).format('0,0.00') : 0;
};
