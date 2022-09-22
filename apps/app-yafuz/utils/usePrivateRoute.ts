import { useAuth } from 'core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePrivateRoute = ({
  redirect,
  isPrivate
}: { isPrivate?: boolean; redirect?: string } = {}) => {
  const { isSession } = useAuth();
  const router = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isPrivate && !isSession) router.push('/auth/login');
    if (redirect && isSession) router.push(redirect);

    setMount(true);
  }, []);

  return {
    mount
  };
};
