import { formatCurrency, ISales, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, Typography, useTheme } from 'ui';
import { useTableStyle } from 'view/offerList/hooks';
import { TUseConfig } from './types';
import { useMyOffers } from './useMyOffers';

const chipColors = {
  bank_transfer: 'success',
  certified_turn: 'primary',
  crypto_wallet: 'textPrimary',
  virtual_wallet: 'secondary',
  internal_balance: 'info'
};

export const useConfig = ({ translate }: TUseConfig) => {
  const { language } = useI18n();
  const [showModal, setShowModal] = useState(false);
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const [saleSelected, setSaleSelected] = useState<ISales>({} as ISales);
  const { theme } = useTheme();
  const [invoiceId, setInvoiceId] = useState<string | undefined>(undefined);
  const { data, refetch, isLoading, handleDeleteSale, loadingDeleteSale } =
    useMyOffers({
      translate,
      offerId: saleSelected.id,
      handleShowModal: setShowModal
    });
  useTableStyle({ keyDeps: [theme, data?.total] });

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
        name: translate('offers_list.price'),
        width: 30,
        accessor: 'price',
        render: (row: ISales) => (
          <>
            {formatCurrency(row.price, '0,00[.]00000')}{' '}
            {row?.exchangeCurrency?.prefix}
          </>
        )
      },
      {
        name: translate('offers_list.quantity_offer'),
        accessor: 'quantity',
        width: 30,
        render: (row: ISales) => (
          <>{formatCurrency(row.quantity, '0,00[.]00000')} YAZ</>
        )
      },
      {
        name: translate('offers_list.method_payment'),
        width: 40,
        render: (row: ISales) => {
          const umps =
            row.user?.usermethodpayment?.map(
              (item) => item.methodPayment?.halfAccount
            ) || [];

          const umpsDistinct = [...new Set(umps?.map((x) => x))];

          return (
            <FlexContainer
              direction="row"
              style={{ flexWrap: 'wrap' }}
              padding="8px 0"
            >
              {umpsDistinct?.map((item, index) => (
                <Typography
                  key={`${item}-${index}`}
                  align="center"
                  color="light"
                  variant="caption3"
                  style={{
                    color: theme?.colors.text?.[chipColors[item] as 'warning'],
                    fontWeight: 600,
                    padding: 5,
                    background: `${
                      theme?.colors.text?.[chipColors[item] as 'warning']
                    }25`,
                    borderRadius: 8,
                    margin: 4
                  }}
                >
                  {translate(`bank.half_account_enum.${item}`)}
                </Typography>
              ))}
            </FlexContainer>
          );
        }
      },
      {
        name: translate('global.actions'),
        width: 300,
        fixed: true,
        render: (item: ISales) => {
          return (
            <FlexContainer justify="center" direction="row">
              <>
                <Button
                  onClick={() => {
                    setSaleSelected(item);
                    setShowModal(true);
                  }}
                  size="small"
                  iconLeft="pencil-alt"
                  variant="contained"
                  background="info"
                  color="light"
                  title={translate('offers_list.actions.edit')}
                />
                <Button
                  loading={invoiceId === item.id && loadingDeleteSale}
                  onClick={() => {
                    setInvoiceId(item.id);
                    handleDeleteSale({ saleId: item.id });
                  }}
                  size="small"
                  iconLeft="ban"
                  variant="contained"
                  background="error"
                  color="light"
                  title={translate('offers_list.actions.delete')}
                />
              </>
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, data, loadingDeleteSale]);

  return {
    columns,
    saleSelected,
    showModal,
    handleModal: (state: boolean) => setShowModal(state),
    data,
    refetch,
    isLoading
  };
};
