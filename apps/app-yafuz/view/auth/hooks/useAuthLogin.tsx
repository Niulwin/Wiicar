import { useAuth, useMutation, useTranslate } from 'core';
import { ChangeEvent, useState } from 'react';
import { message } from 'ui';
import { useLogin } from './useLogin';

export const useAuthLogin = () => {
  const t = useTranslate();
  const [loading, setLoading] = useState(false);
  const { handleSessionWithMetamask } = useLogin();
  const { handleLogin: signIn } = useAuth();
  const [values, setValues] = useState<{ email?: string; password?: string }>(
    {}
  );

  const onSuccess = (resp?: { token: string }) => {
    message.success(t('login.successful'));
    setLoading(false);
    signIn({ authorization: resp?.token }, () => (location.href = '/'));
  };

  const { mutate: loginMutate } = useMutation<
    { token: string },
    { address_wallet?: string; email?: string; password?: string }
  >('test', '/auth/login', { onSuccess, onError: () => setLoading(false) });

  const handleLogin = async () => {
    try {
      setLoading(true);
      const resp = await handleSessionWithMetamask();
      if (resp[0] === 'undefined' || resp[0] === 'null')
        throw new Error(t('global.errors.OCCURRED_ERROR'));

      loginMutate({
        variables: {
          address_wallet: resp[0]
        }
      });
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoading(false);
      message.error(err?.message || t('global.errors.OCCURRED_ERROR'));
    }
  };

  const handleGeneralLogin = async () => {
    try {
      setLoading(true);
      loginMutate({
        variables: {
          email: values.email,
          password: values.password
        }
      });
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoading(false);
      message.error(err?.message || t('global.errors.OCCURRED_ERROR'));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return {
    handleLogin,
    handleGeneralLogin,
    loading,
    values,
    handleChange
  };
};
