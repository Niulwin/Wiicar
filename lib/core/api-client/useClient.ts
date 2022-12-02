/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient as useReactQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { QueryClientContext } from './provider';
export type { UseMutateFunction } from '@tanstack/react-query';

export const useClient = () => {
  const { client: axios } = useContext(QueryClientContext);

  return (token: string) => axios.setAuthorization(token);
};

export const useQueryClient = () => {
  const queryClient = useReactQueryClient();

  return queryClient;
};
