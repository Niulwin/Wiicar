/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation as useReactMutation,
  UseMutationResult,
  useQuery as useReactQuery,
  UseQueryResult
} from '@tanstack/react-query';
import { useContext } from 'react';
import { message } from 'ui';
import { useTranslate } from '../i18n/hooks';
import { QueryClientContext } from './provider';

export const useQuery = <TData, TError = Record<string, unknown>>(
  key: string,
  path: string
): UseQueryResult<TData, TError> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactQuery([key], () => axios.get(path).then((res) => res.data), {
    onError: (err: any) => {
      message.warn(translate(err?.response?.data?.err_code));
    }
  });
};

export const useMutation = <T, R = Record<string, unknown>>(
  key: string,
  path: string,
  options?: {
    onSuccess: (resData: R) => void;
    onError: (err: any) => void;
  }
): UseMutationResult<{ data: R }, { error: boolean }, T> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactMutation(
    [key],
    (args) => axios.post<T, any>({ path, args }).then((res) => res.data),
    {
      onError: (err: any) => {
        message.warn(translate(err?.response?.data?.err_code));
      },
      onSuccess: (resData) => options?.onSuccess(resData)
    }
  );
};

export const useLazyQuery = <T, R = Record<string, unknown>>(
  key: string,
  path: string,
  options?: {
    onSuccess: (resData: R) => void;
  }
): UseMutationResult<R, { error: boolean }, T> => {
  const translate = useTranslate();
  const { client: axios } = useContext(QueryClientContext);

  return useReactMutation(
    [key],
    () => axios.get<any>(path).then((res) => res.data),
    {
      onError: (err: any) => {
        message.warn(translate(err?.response?.data?.err_code));
      },
      onSuccess: (resData) => options?.onSuccess(resData)
    }
  );
};

export const useClient = () => {
  const { client: axios } = useContext(QueryClientContext);

  return (token: string) => axios.setAuthorization(token);
};
