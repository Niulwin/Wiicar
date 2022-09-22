import { ISales, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, Typography, useTheme } from 'ui';
import { TUseConfig } from './types';

const STATUS = {
  SELL: 'error',
  ENABLE: 'success',
  PROGRESS: 'info',
  DISABLED: 'disabled',
  CANCEL_BUYER: 'warning'
};
export const useConfig = ({
  translate,
  data,
  handleRequest,
  loadingRequest
}: TUseConfig) => {
  const { language } = useI18n();
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const { theme } = useTheme();
  const [invoiceId, setInvoiceId] = useState<string | undefined>(undefined);

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
        name: translate('my_shopping.seller'),
        width: 30,
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
        width: 10,
        render: (item: ISales) => {
          return (
            <FlexContainer justify="center">
              <Button
                disabled={item.state !== 'ENABLE'}
                loading={invoiceId === item.id && loadingRequest}
                onClick={() => {
                  setInvoiceId(item.id);
                  handleRequest({ salesId: item.id });
                }}
                size="xs"
                iconLeft="comments-dollar"
                variant="contained"
                background="success"
                color="light"
                tooltip={translate('offers_list.buy')}
              />
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, data, loadingRequest]);

  return { columns };
};
