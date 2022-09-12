/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation as useReactMutation,
  UseMutationResult,
  useQuery as useReactQuery
} from '@tanstack/react-query';
import { message } from 'ui';
import { useTranslate } from '../i18n/hooks';
import { axios } from './provider';

export const useQuery = (key: string, path: string) =>
  useReactQuery([key], () => axios.get(path).then((res) => res.data));

export const useMutation = <T>(
  key: string,
  path: string
): UseMutationResult<{ data: T }, { error: boolean }, T> => {
  const translate = useTranslate();

  return useReactMutation(
    [key],
    (args) => axios.post<T, any>({ path, args }).then((res) => res.data),
    {
      onError: (err: any) => {
        message.warn(translate(err?.response?.data?.err_code));
      }
    }
  );
};
