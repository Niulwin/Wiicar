import { IInvoices, useI18n } from 'core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, Typography, useTheme } from 'ui';
import { TUseConfig } from './types';

const STATUS = {
  SELL: 'success',
  ENABLE: 'success',
  PROGRESS: 'info',
  DISABLED: 'error',
  CANCEL_BUYER: 'warning',
  CANCEL_SELLER: 'warning',
  PAYMENT: 'info',
  APPROVAL: 'success',
  EXPIRED_TIME: 'warning'
};
export const useConfig = ({
  translate,
  data,
  handleCancelSeller,
  loadingCancelSeller
}: TUseConfig) => {
  const { language } = useI18n();
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const { theme } = useTheme();
  const [invoiceId, setInvoiceId] = useState<string | undefined>(undefined);
  const router = useRouter();

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
        width: 20,
        render: (row: IInvoices) => {
          return `${row?.buyer?.nombre} ${row?.buyer?.apellidos}`;
        }
      },
      {
        name: translate('my_sales.method_payment'),
        accessor: 'sale.userMethodPayment.methodPayment.name',
        width: 20
      },
      {
        name: translate('my_sales.price'),
        accessor: 'sale.price',
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
        render: (row: IInvoices) => {
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
        render: (item: IInvoices) => {
          return (
            <FlexContainer justify="center" direction="row">
              <Button
                disabled={item.state !== 'PROGRESS' && item.state !== 'PAYMENT'}
                onClick={() => {
                  router.push(`/order-details/${item.id}?type=seller`);
                  // setInvoiceId(item.id);
                  // handleApproveSeller({ invoiceId: item.id });
                }}
                size="normal"
                iconLeft="check-double"
                variant="contained"
                background="info"
                color="light"
                title={translate('my_sales.going_transaction')}
              />
              <Button
                disabled={item.state !== 'PROGRESS' && item.state !== 'PAYMENT'}
                loading={invoiceId === item.id && loadingCancelSeller}
                onClick={() => {
                  setInvoiceId(item.id);
                  handleCancelSeller({ invoiceId: item.id });
                }}
                size="small"
                iconLeft="ban"
                variant="contained"
                background="error"
                color="light"
                title={translate('global.cancel')}
              />
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, data, loadingCancelSeller]);

  return { columns };
};
