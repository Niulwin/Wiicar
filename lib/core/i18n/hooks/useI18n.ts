import { i18n } from '../index';

export const useI18n = () => {
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  return { i18n, language: i18n.languages[0], changeLanguage };
};
