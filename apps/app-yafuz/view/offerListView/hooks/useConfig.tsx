import { ISales, useI18n } from 'core';
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
        render: (_row, index) => {
          return index + 1;
        }
      },
      {
        name: translate('offers_list.name'),
        width: 20,
        render: (row: ISales) => {
          return `${row?.user?.nombre} ${row?.user?.apellidos}`;
        }
      },
      {
        name: translate('offers_list.method_payment'),
        accessor: 'userMethodPayment.methodPayment.name',
        width: 20
      },
      {
        name: translate('offers_list.price'),
        accessor: 'price',
        width: 20
      },
      {
        name: translate('offers_list.quantity'),
        accessor: 'quantity',
        width: 20
      },
      {
        name: translate('global.actions'),
        width: 20,
        render: () => {
          return <ActionTableOptions buttons={['info', 'delete', 'check']} />;
        }
      }
    ]);
  }, [theme, language]);

  return { columns };
};
