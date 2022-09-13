import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query';
import { createContext } from 'react';
import { AxiosClient } from './axios';
const queryClient = new QueryClient();

export const QueryClientContext = createContext<{ client: AxiosClient }>(
  {} as { client: AxiosClient }
);

export const QueryClientProvider = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const client = AxiosClient.getInstance(process.env.API_URL as string);

  return (
    <QueryClientContext.Provider value={{ client }}>
      <ReactQueryClientProvider client={queryClient}>
        {children}
      </ReactQueryClientProvider>
    </QueryClientContext.Provider>
  );
};
