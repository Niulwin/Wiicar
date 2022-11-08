import { useRouter } from 'next/router';
import { createContext, FC, useState } from 'react';
import { useClient, useLazyQuery, useQueryClient } from '../api-client';
import { TCurrentUser } from '../entities/auth';
import { TAuthContext, TAuthProviderProps, TTokens } from './types';

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

const AuthProvider: FC<TAuthProviderProps> = ({
  children
}: TAuthProviderProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [tokens, setTokens] = useState<TTokens>({ authorization: undefined });
  const [isSession, setIsSession] = useState(
    () => !!localStorage.getItem('session')
  );
  const setAuthorization = useClient();
  const { mutate: getCurrentUser, data: currentUser } = useLazyQuery<
    TCurrentUser | undefined,
    undefined | null,
    { message: string }
  >('auth.currentUser', 'auth/current-user', {
    onError: (err) => err.message === 'jwt expired' && handleLogout()
  });

  const handleLogin = (responseTokens: TTokens, callback: () => void): void => {
    if (!responseTokens.authorization)
      return console.error('Token is not provided');

    setTokens({ authorization: responseTokens.authorization });
    setIsSession(true);
    localStorage.setItem('session', responseTokens.authorization);
    setAuthorization(responseTokens.authorization as string);
    callback();
  };

  const handleLogout = () => {
    queryClient.clear();
    setIsSession(false);
    localStorage.removeItem('session');
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider
      value={{
        tokens,
        isSession,
        currentUser: currentUser,
        getCurrentUser: () => getCurrentUser({}),
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
