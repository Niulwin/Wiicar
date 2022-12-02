/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useQuery as useReactQuery,
  UseQueryResult
} from '@tanstack/react-query';
import { useContext } from 'react';
import { message } from 'ui';
import { useTranslate } from '../i18n/hooks';
import { QueryClientContext } from './provider';
import { TQueryOptions } from './types';

export const useQuery = <
  TResponse,
  TVariables = Record<string, unknown>,
  TError = Record<string, unknown>
>(
  key: string,
  path: string,
  options?: TQueryOptions<TResponse, TVariables, TError>
): UseQueryResult<TResponse, TError> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactQuery(
    [key],
    () =>
      axios
        .get({
          path,
          params: options?.params
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res: TResponse) => {
        options?.onSuccess && options.onSuccess(res);
      },
      onError: (err: any) => {
        options?.onError && options?.onError(err);

        message.warning(
          `${options?.translateErrorPath || 'global'}.errors.${translate(
            err?.response?.data?.err_code || err?.message || 'OCCURRED_ERROR'
          )}`
        );
      }
    }
  );
};
