/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation as useReactMutation,
  UseMutationResult,
  useQuery as useReactQuery,
  useQueryClient as useReactQueryClient,
  UseQueryResult
} from '@tanstack/react-query';
import { useContext } from 'react';
import { message } from 'ui';
import { useTranslate } from '../i18n/hooks';
import { QueryClientContext } from './provider';
import { TQueryOptions } from './types';
export type { UseMutateFunction } from '@tanstack/react-query';

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
    () => axios.get(path, options?.variables).then((res) => res.data),
    {
      onSuccess: (res: TResponse) => {
        options?.onSuccess && options.onSuccess(res);
      },
      onError: (err: any) => {
        options?.onError && options?.onError(err);

        message.warn(
          `global.${translate(
            err?.response?.data?.err_code ||
              err?.message ||
              'error.occurred_error'
          )}`
        );
      }
    }
  );
};

export const useMutation = <
  TResponse = Record<string, unknown>,
  TVariables = Record<string, unknown>,
  TError = Record<string, unknown>
>(
  key: string,
  path: string,
  options?: TQueryOptions<TResponse, TVariables, TError>
): UseMutationResult<TResponse, TError, TVariables> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactMutation(
    [key],
    (args) =>
      axios
        .post<TVariables, any>({ path, args: args || options?.variables })
        .then((res) => res.data),
    {
      onError: (err: any) => {
        message.warn(
          translate(
            `global.${translate(
              err?.response?.data?.err_code ||
                (err.response?.status === 500
                  ? 'error.occurred_error'
                  : err?.message)
            )}`
          )
        );
      },
      onSuccess: (resData: TResponse) =>
        options?.onSuccess ? options?.onSuccess(resData) : undefined
    }
  );
};

export const useLazyQuery = <
  TResponse,
  TVariables = Record<string, unknown> | undefined,
  TError = Record<string, unknown> | undefined
>(
  key: string,
  path: string,
  options?: TQueryOptions<TResponse, TVariables, TError>
): UseMutationResult<TResponse, TError, TVariables> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactMutation(
    [key],
    () => axios.get<any>(path, options?.variables).then((res) => res.data),
    {
      onError: (err: any) => {
        options?.onError && options.onError(err);

        message.warn(
          translate(
            `global.${translate(
              err?.response?.data?.err_code ||
                err?.message ||
                'error.occurred_error'
            )}`
          )
        );
      },
      onSuccess: (resData) => options?.onSuccess && options?.onSuccess(resData)
    }
  );
};

export const useClient = () => {
  const { client: axios } = useContext(QueryClientContext);

  return (token: string) => axios.setAuthorization(token);
};

export const useQueryClient = () => {
  const queryClient = useReactQueryClient();

  return queryClient;
};
