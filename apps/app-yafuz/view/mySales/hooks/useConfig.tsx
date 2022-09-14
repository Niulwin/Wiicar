import { ISales, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { ActionTableOptions, TTableColumns, Typography, useTheme } from 'ui';

const STATUS = {
  SELL: 'error',
  ENABLE: 'success',
  PROGRESS: 'info',
  DISABLED: 'disabled'
};
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
        render: (_row: ISales, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('my_sales.name'),
        width: 20,
        render: (row: ISales) => {
          return `${row?.user?.nombre} ${row?.user?.apellidos}`;
        }
      },
      {
        name: translate('my_sales.method_payment'),
        accessor: 'userMethodPayment.methodPayment.name',
        width: 20
      },
      {
        name: translate('my_sales.price'),
        accessor: 'price',
        width: 10
      },
      {
        name: translate('my_sales.quantity'),
        accessor: 'quantity',
        width: 10
      },
      {
        name: translate('my_sales.status.name'),
        width: 20,
        render: (row: ISales) => {
          return (
            <Typography
              align="center"
              color={STATUS[row?.state || 'ENABLE'] as 'textPrimary'}
              variant="caption"
            >
              {translate(`my_sales.status.${row?.state}`)}
            </Typography>
          );
        }
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
