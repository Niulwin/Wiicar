import { useTranslation } from 'react-i18next';

export const useTranslate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};
