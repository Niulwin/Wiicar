import { IMethodPayments, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { ActionTableOptions, TTableColumns, useTheme } from 'ui';

export const useConfig = ({
  translate
}: {
  translate: (key: string) => string;
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
        render: (_row: IMethodPayments, index) => {
          return index + 1;
        }
      },
      {
        name: translate('bank.code'),
        accessor: 'code',
        width: 30
      },
      {
        name: translate('bank.name'),
        accessor: 'name',
        width: 50
      },
      {
        name: translate('global.actions'),
        width: 20,
        render: () => <ActionTableOptions buttons={['delete']} />
      }
    ]);
  }, [theme, language]);

  return { columns };
};
