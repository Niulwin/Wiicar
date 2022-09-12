import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query';
import { AxiosClient } from './axios';
const queryClient = new QueryClient();

export const axios = AxiosClient.getInstance(process.env.API_URL as string);

export const QueryClientProvider = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
