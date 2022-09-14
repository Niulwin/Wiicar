import { useAuth } from 'core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePrivateRoute = ({ redirect }: { redirect?: string } = {}) => {
  const { isSession } = useAuth();
  const router = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isSession && redirect) router.push(redirect);
    setMount(true);
  }, []);

  return {
    mount
  };
};
