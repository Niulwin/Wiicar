import { useMutation } from 'core';
import { ReactElement, useEffect } from 'react';

function Banks(): ReactElement {
  const { mutate, data, error } = useMutation<{ address_wallet: string }>(
    'test',
    'auth/login'
  );

  useEffect(() => {
    mutate({ address_wallet: 'sldakjfljsldkjfkaj' });
  }, [mutate]);

  console.log('hola', data?.data);
  return <div />;
}

export default Banks;
