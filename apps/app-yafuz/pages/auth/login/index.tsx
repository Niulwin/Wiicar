import { LoginComponent } from 'view/auth';

const LoginPage = () => {
  return <LoginComponent />;
};

LoginPage.layout = 'L1';
LoginPage.hiddenSidebars = true;
LoginPage.hiddenLogin = true;

export default LoginPage;
