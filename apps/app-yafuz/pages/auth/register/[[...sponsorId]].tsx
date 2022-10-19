import Head from 'next/head';
import { usePrivateRoute } from 'utils';
import { RegisterComponent } from 'view/auth';

const RegisterPage = () => {
  const { mount } = usePrivateRoute({ redirect: '/home' });

  return (
    <>
      <Head>
        <title>Yafuz - Register</title>
      </Head>
      {mount ? <RegisterComponent /> : null}
    </>
  );
};

RegisterPage.layout = 'L1';
RegisterPage.hiddenSidebars = true;
RegisterPage.hiddenLogin = true;

export default RegisterPage;
