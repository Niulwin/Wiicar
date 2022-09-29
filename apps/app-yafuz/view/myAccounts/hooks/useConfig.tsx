import {
  IUserMethodPayments,
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
  data?: TPagination<IUserMethodPayments>;
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
        name: translate('my_accounts.code'),
        width: 20,
        accessor: 'methodPayment.code'
      },
      {
        name: translate('my_accounts.identification'),
        width: 20,
        accessor: 'identification_card'
      },
      {
        name: translate('my_accounts.method_payment'),
        width: 20,
        accessor: 'methodPayment.name'
      },
      {
        name: translate('my_accounts.method_payment_type'),
        accessor: 'typeAccount',
        width: 20
      },
      {
        name: translate('my_accounts.method_payment_number'),
        accessor: 'value',
        width: 20
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
  }, [theme, language, data?.total]);

  return { columns };
};
