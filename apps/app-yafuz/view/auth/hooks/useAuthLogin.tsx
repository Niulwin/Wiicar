import { useAuth, useMutation, useTranslate } from 'core';
import { useState } from 'react';
import { message } from 'ui';
import { useLogin } from './useLogin';

export const useAuthLogin = () => {
  const t = useTranslate();
  const [loading, setLoading] = useState(false);
  const { handleSessionWithMetamask } = useLogin();
  const { handleLogin: signIn } = useAuth();

  const onSuccess = ({ token }: { token: string }) => {
    message.success(t('login.successful'));
    setLoading(false);
    signIn({ authorization: token }, () => (location.href = '/'));
  };

  const { mutate: loginMutate } = useMutation<
    { address_wallet: string },
    { token: string }
  >('test', 'auth/login', { onSuccess, onError: () => setLoading(false) });

  const handleLogin = async () => {
    try {
      setLoading(true);
      const resp = await handleSessionWithMetamask();
      if (resp[0] === 'undefined' || resp[0] === 'null')
        throw new Error(t('global.error.occurred_error'));

      loginMutate({ address_wallet: resp[0] });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoading(false);
      message.error(err.message);
    }
  };

  return {
    handleLogin,
    loading
  };
};
