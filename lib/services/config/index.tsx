import axios from 'axios';
import { QueryClient } from 'react-query';
import { API_URL } from '../url';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

//Axios Client
export const AxiosClient = axios.create({
  baseURL: API_URL as any,
  timeout: 2000
});
