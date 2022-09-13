import { TCurrentUser } from '../entities/auth';

export type TTokens = { authorization?: string };
export type TAuthContext = {
  tokens: TTokens;
  isSession: boolean;
  currentUser?: TCurrentUser;
  getCurrentUser: () => void;
  handleLogin: (tokens: TTokens, callback: () => void) => void;
};
export type TAuthProviderProps = {
  children: JSX.Element | JSX.Element[];
};
