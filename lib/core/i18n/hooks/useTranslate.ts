import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { t } = useTranslation();

  return (key: string): string => t(key);
};
