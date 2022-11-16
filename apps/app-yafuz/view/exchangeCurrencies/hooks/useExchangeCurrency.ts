import { IExchangeCurrency, useLazyQuery } from 'core';
import { useEffect } from 'react';

export const useExchangeCurrency = (props?: { countryId?: string }) => {
  const {
    data: dataExchangeCurrencies,
    isLoading: loadExchangeCurrencies,
    mutate: getExchangeCurrencies
  } = useLazyQuery<
    IExchangeCurrency[],
    unknown,
    unknown,
    { countryId: string }
  >('exchange-currencies', 'exchange-currencies');

  const handleExchangeCurrencies = (countryId: string) =>
    getExchangeCurrencies({
      query: {
        countryId
      }
    });

  useEffect(() => {
    props?.countryId && handleExchangeCurrencies(props?.countryId);
  }, [props?.countryId]);

  return {
    loadExchangeCurrencies,
    dataExchangeCurrencies,
    handleExchangeCurrencies
  };
};
