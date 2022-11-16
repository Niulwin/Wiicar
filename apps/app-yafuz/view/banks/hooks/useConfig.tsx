import {
  IMethodPayments,
  NamespaceTranslate,
  TPagination,
  useI18n
} from 'core';
import { useEffect, useState } from 'react';
import { ActionTableOptions, TTableColumns, useTheme } from 'ui';

export const useConfig = ({
  translate,
  data
}: {
  translate: (key: NamespaceTranslate) => string;
  data?: TPagination<IMethodPayments>;
}) => {
  const { language } = useI18n();
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setColumns([
      {
        name: '#',
        width: 40,
        fixed: true,
        render: (_row: IMethodPayments, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('bank.code'),
        accessor: 'code',
        width: 15
      },
      {
        name: translate('bank.name'),
        accessor: 'name',
        width: 30
      },
      {
        name: translate('bank.half_account'),
        accessor: 'halfAccount',
        width: 15,
        render: (row: IMethodPayments) =>
          translate(`bank.half_account_enum.${row?.halfAccount}`)
      },
      {
        name: translate('bank.country'),
        width: 20,
        render: (row: IMethodPayments) =>
          language === 'es' ? row?.country?.nombre : row?.country?.name
      },
      {
        name: translate('global.actions'),
        width: 20,
        render: () => <ActionTableOptions buttons={['delete']} />
      }
    ]);
  }, [theme, language, data?.total]);

  return { columns };
};
