/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation as useReactMutation,
  UseMutationResult
} from '@tanstack/react-query';
import { useContext } from 'react';
import { message } from 'ui';
import { NamespaceTranslate, useTranslate } from '../i18n/hooks';
import { QueryClientContext } from './provider';
import { TQueryOptions } from './types';

export const useLazyQuery = <
  TResponse,
  TVariables = Record<string, unknown> | undefined,
  TError = Record<string, unknown> | undefined,
  TQuery = Record<string, unknown>
>(
  key: string | string[],
  path: string,
  options?: TQueryOptions<TResponse, TVariables, TError> & {
    query?: TQuery;
  }
): UseMutationResult<
  TResponse,
  TError,
  {
    variables?: TVariables;
    query?: TQuery;
    params?: string[];
  }
> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactMutation(
    [key],
    (args) =>
      axios
        .get<any, TQuery>({
          path,
          params: args?.params || options?.params,
          query: args?.query || options?.query
        })
        .then((res) => res.data),
    {
      networkMode: 'offlineFirst',
      onError: (err: any) => {
        options?.onError && options.onError(err);

        message.warn(
          translate(
            `${options?.translateErrorPath || 'global'}.errors.${
              err?.response?.data?.err_code || err?.message || 'OCCURRED_ERROR'
            }` as NamespaceTranslate
          )
        );
      },
      onSuccess: (resData) => options?.onSuccess && options?.onSuccess(resData)
    }
  );
};
