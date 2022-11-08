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

export const useMutation = <
  TResponse = Record<string, unknown>,
  TVariables = Record<string, unknown>,
  TError = Record<string, unknown>,
  TQuery = Record<string, unknown>
>(
  key: string,
  path: string,
  options?: TQueryOptions<TResponse, TVariables, TError> & {
    query?: TQuery;
    formData?: boolean;
    httpMethod?: 'PUT' | 'POST' | 'PATCH' | 'DELETE';
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
    async (args) =>
      axios
        .httpMethod<TVariables, any, TQuery>({
          path,
          args: args.variables || options?.variables,
          params: args.params || options?.params,
          query: args.query || options?.query,
          formData: options?.formData,
          method: options?.httpMethod
        })
        .then((res) => res.data),
    {
      onError: (err: any) => {
        message.warn(
          translate(
            `${options?.translateErrorPath || 'global'}.errors.${
              err?.response?.data?.err_code || err?.message || 'OCCURRED_ERROR'
            }` as NamespaceTranslate
          )
        );
      },
      onSuccess: (resData: TResponse) =>
        options?.onSuccess ? options?.onSuccess(resData) : undefined
    }
  );
};
