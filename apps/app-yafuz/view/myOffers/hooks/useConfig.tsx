import { ISales, useI18n } from 'core';
import { useEffect, useState } from 'react';
import { Button, FlexContainer, TTableColumns, useTheme } from 'ui';
import { TUseConfig } from './types';
import { useMyOffers } from './useMyOffers';

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
        accessor: 'price'
      },
      {
        name: translate('offers_list.quantity'),
        accessor: 'quantity',
        width: 30
      },
      {
        name: translate('offers_list.method_payment'),
        width: 40,
        render: (row: ISales) => (
          <>{row.userMethodPayment?.methodPayment?.name}</>
        )
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
