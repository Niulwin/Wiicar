import { LanguagesSupport, useI18n, useTranslate } from 'core';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { changeLanguage, language } = useI18n();
  console.log(language);

  return (
    <>
      <button onClick={() => changeLanguage(LanguagesSupport.English)}>
        Change language to English2
      </button>
      <button onClick={() => changeLanguage(LanguagesSupport.Spanish)}>
        Change language to Spanish
      </button>
      <h1>{useTranslate('login.login')}</h1>
      <h1>{useTranslate('login.sign_up')}</h1>
    </>
  );
};
export default Home;
