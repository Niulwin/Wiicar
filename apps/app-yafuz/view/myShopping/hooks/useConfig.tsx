import { IInvoices, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, Typography, useTheme } from 'ui';
import { TUseConfig } from './types';

const STATUS = {
  SELL: 'error',
  ENABLE: 'success',
  PROGRESS: 'info',
  DISABLED: 'disabled',
  PAYMENT: 'success',
  CANCEL_BUYER: 'warning',
  CANCEL_SELLER: 'warning',
  EXPIRED_TIME: 'warning',
  APPROVAL: 'info'
};
export const useConfig = ({
  translate,
  handleCancelBuyer,
  loadingCancelBuyer
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
        render: (_row: IInvoices, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('my_shopping.buyer'),
        width: 15,
        render: (row: IInvoices) => {
          return `${row?.buyer?.nombre} ${row?.buyer?.apellidos}`;
        }
      },
      {
        name: translate('my_shopping.seller'),
        width: 15,
        render: (row: IInvoices) => {
          return `${row?.seller?.nombre} ${row?.seller?.apellidos}`;
        }
      },
      {
        name: translate('my_shopping.method_payment'),
        accessor: 'sale.userMethodPayment.methodPayment.name',
        width: 15
      },
      {
        name: translate('my_shopping.price'),
        accessor: 'sale.price',
        width: 15
      },
      {
        name: translate('my_shopping.quantity'),
        accessor: 'quantity',
        width: 10
      },
      {
        name: translate('my_shopping.status.name'),
        width: 15,
        render: (row: IInvoices) => {
          return (
            <Typography
              align="center"
              color={STATUS[row?.state || 'ENABLE'] as 'textPrimary'}
              variant="caption"
            >
              {translate(`my_shopping.status.${row?.state}`)}
            </Typography>
          );
        }
      },
      {
        name: translate('global.actions'),
        width: 15,
        render: (item: IInvoices) => {
          return (
            <FlexContainer justify="center" direction="row">
              <Button
                disabled={item.state !== 'PROGRESS'}
                loading={invoiceId === item.id && loadingCancelBuyer}
                onClick={() => {
                  setInvoiceId(item.id);
                  handleCancelBuyer({ invoiceId: item.id });
                }}
                size="xs"
                iconLeft="ban"
                variant="contained"
                background="error"
                color="light"
                title={translate('global.cancel')}
                tooltip={translate('global.cancel')}
              />
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, loadingCancelBuyer]);

  return { columns };
};
