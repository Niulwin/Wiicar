import { formatCurrency, IInvoices, useI18n } from 'core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, Typography, useTheme } from 'ui';
import { TUseConfig } from './types';

const STATUS = {
  SELL: 'error',
  ENABLE: 'success',
  PROGRESS: 'info',
  DISABLED: 'disabled',
  PAYMENT: 'info',
  CANCEL_BUYER: 'warning',
  CANCEL_SELLER: 'warning',
  EXPIRED_TIME: 'warning',
  APPROVAL: 'success'
};
export const useConfig = ({
  translate,
  handleCancelBuyer,
  loadingCancelBuyer
}: TUseConfig) => {
  const { language } = useI18n();
  const router = useRouter();
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const { theme } = useTheme();
  const [invoiceId, setInvoiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setColumns([
      {
        name: '#',
        width: 30,
        fixed: true,
        render: (_row: IInvoices, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('my_shopping.seller'),
        width: 20,
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
        width: 10,
        render: (row: IInvoices) => {
          return (
            <>
              {formatCurrency(row?.sale?.price, '0,00[.]00000')}{' '}
              {row?.sale?.exchangeCurrency?.prefix}
            </>
          );
        }
      },
      {
        name: translate('my_shopping.quantity'),
        accessor: 'quantity',
        width: 10,
        render: (row: IInvoices) => {
          return `${row?.quantity} YAZ`;
        }
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
        width: 30,
        render: (item: IInvoices) => {
          return (
            <FlexContainer justify="center" direction="row">
              {(item.state === 'PROGRESS' || item.state === 'PAYMENT') && (
                <>
                  <Button
                    onClick={() => {
                      router.push(`/order-details/${item.id}?type=buyer`);
                    }}
                    size="normal"
                    iconLeft="check-double"
                    variant="contained"
                    background="info"
                    color="light"
                    title={translate('my_sales.going_transaction')}
                  />
                  <Button
                    loading={invoiceId === item.id && loadingCancelBuyer}
                    onClick={() => {
                      setInvoiceId(item.id);
                      handleCancelBuyer({ variables: { invoiceId: item.id } });
                    }}
                    size="small"
                    iconLeft="ban"
                    variant="contained"
                    background="error"
                    color="light"
                    title={translate('global.cancel')}
                    tooltip={translate('global.cancel')}
                  />
                </>
              )}
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, loadingCancelBuyer]);

  return { columns };
};
