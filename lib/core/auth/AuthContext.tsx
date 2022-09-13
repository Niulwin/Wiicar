import { createContext, FC, useState } from 'react';
import { useClient, useLazyQuery } from '../api-client';
import { TCurrentUser } from '../entities/auth';
import { TAuthContext, TAuthProviderProps, TTokens } from './types';

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

const AuthProvider: FC<TAuthProviderProps> = ({
  children
}: TAuthProviderProps) => {
  const [tokens, setTokens] = useState<TTokens>({ authorization: undefined });
  const [isSession, setIsSession] = useState(
    () => !!localStorage.getItem('session')
  );
  const setAuthorization = useClient();
  const { mutate: getCurrentUser, data: currentUser } = useLazyQuery<
    null,
    TCurrentUser
  >('auth.currentUser', 'auth/current-user');

  const handleLogin = (responseTokens: TTokens, callback: () => void): void => {
    if (!responseTokens.authorization)
      return console.error('Token is not provided');

    setTokens({ authorization: responseTokens.authorization });
    setIsSession(true);
    localStorage.setItem('session', responseTokens.authorization);
    setAuthorization(responseTokens.authorization as string);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{
        tokens,
        isSession,
        currentUser: currentUser,
        getCurrentUser: () => getCurrentUser(null),
        handleLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
