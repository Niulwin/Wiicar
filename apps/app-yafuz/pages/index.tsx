import { useI18n } from 'core';
import { NextPage } from 'next';
import Home from './home';

const Index: NextPage = () => {
  const { changeLanguage, language } = useI18n();

  return <Home />;
};
export default Index;
