import { LanguagesSupport, useI18n, useTranslate } from 'core';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { changeLanguage } = useI18n();
  const translate = useTranslate();

  return (
    <>
      <button onClick={() => changeLanguage(LanguagesSupport.English)}>
        Change language to English2
      </button>
      <button onClick={() => changeLanguage(LanguagesSupport.Spanish)}>
        Change language to Spanish
      </button>
      <h1>{translate('login.login')}</h1>
      <h1>{translate('login.change_language')}</h1>
    </>
  );
};
export default Home;
