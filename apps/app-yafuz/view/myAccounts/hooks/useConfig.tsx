import { useI18n } from 'core';
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
        render: (_row: any, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('my_accounts.name'),
        width: 25,
        accessor: 'methodPayment.code'
      },
      {
        name: translate('my_accounts.method_payment'),
        width: 25,
        accessor: 'methodPayment.name'
      },
      {
        name: translate('my_accounts.method_payment_type'),
        accessor: 'typeAccount',
        width: 25
      },
      {
        name: translate('my_accounts.method_payment_number'),
        accessor: 'value',
        width: 25
      },
      {
        name: translate('global.actions'),
        width: 200,
        fixed: true,
        render: () => {
          return <ActionTableOptions buttons={['delete']} />;
        }
      }
    ]);
  }, [theme, language]);

  return { columns };
};
