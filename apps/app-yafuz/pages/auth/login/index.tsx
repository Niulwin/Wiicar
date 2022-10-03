import Head from 'next/head';
import { usePrivateRoute } from 'utils';
import { LoginComponent } from 'view/auth';

const LoginPage = () => {
  const { mount } = usePrivateRoute({ redirect: '/home' });

  return (
    <>
      <Head>
        <title>Yafuz - Login</title>
      </Head>
      {mount ? <LoginComponent /> : null}
    </>
  );
};

LoginPage.layout = 'L1';
LoginPage.hiddenSidebars = true;
LoginPage.hiddenLogin = true;

export default LoginPage;
