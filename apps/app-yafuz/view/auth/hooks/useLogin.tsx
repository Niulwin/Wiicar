import { useTranslate } from 'core';
import { useEffect, useState } from 'react';

export const useLogin = () => {
  const [defaultAccount, setDefaultAccount] = useState<string | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  const t = useTranslate();

  const handleSessionWithMetamask = async () => {
    setError(undefined);

    if (!window.ethereum) {
      setError(t('login.install_metamask'));
      throw new Error(t('login.install_metamask'));
    }

    const resp = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    accountChangeHandler(resp[0]);
    return resp;
  };

  const accountChangeHandler = (newAccount: string) => {
    setDefaultAccount(newAccount);
  };

  useEffect(() => {
    if (window.ethereum) {
      const etherEvent = window.ethereum.on(
        'accountsChanged',
        accountChangeHandler
      );
      return () => {
        removeEventListener(etherEvent, () => null);
      };
    }
  }, []);

  return {
    error,
    defaultAccount,
    handleSessionWithMetamask
  };
};
