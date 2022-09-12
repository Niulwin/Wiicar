import { useMutation } from 'core';
import { ReactElement, useEffect } from 'react';
import { BanksView } from '../../view/banks';

function Banks(): ReactElement {
  const { mutate, data, error } = useMutation<{ address_wallet: string }>(
    'test',
    'auth/login'
  );

  useEffect(() => {
    mutate({ address_wallet: 'sldakjfljsldkjfkajs' });
  }, []);

  // console.log('hola', error);
  return <BanksView />;
}

export default Banks;
