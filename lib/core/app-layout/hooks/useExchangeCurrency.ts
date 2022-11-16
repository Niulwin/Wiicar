import { IExchangeCurrency, useQuery } from 'core';

export const useExchangeCurrency = () => {
  const { data: dataExchangeCurrencies, isLoading: loadExchangeCurrencies } =
    useQuery<IExchangeCurrency[]>(
      'all-exchange-currencies',
      'exchange-currencies'
    );

  return {
    loadExchangeCurrencies,
    dataExchangeCurrencies
  };
};
