import { ISales, useI18n } from 'core';
import { formatCurrency } from 'core/utils/';
import { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  FlexContainer,
  TTableColumns,
  Typography,
  useTheme
} from 'ui';
import { TUseConfig } from './types';
import { useTableStyle } from './useTableStyle';

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
  handleShowRequestOperation
}: TUseConfig) => {
  const { language } = useI18n();
  const [columns, setColumns] = useState<TTableColumns[]>([]);
  const { theme } = useTheme();
  const { mount } = useTableStyle({
    keyDeps: [theme, data?.total]
  });

  useEffect(() => {
    if (mount) {
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
          width: 20,
          render: (row: ISales) => {
            return (
              <FlexContainer direction="column" align="flex-start">
                <FlexContainer
                  direction="row"
                  justify="flex-start"
                  align="center"
                  padding="5px"
                >
                  <Chip
                    size="xs"
                    background="primary"
                    color="light"
                    title={row?.user?.nombre?.slice(0, 1) || ''}
                    variant="contained"
                  />
                  <Typography variant="body1" color="textPrimary">
                    {row?.user?.nombre} {row?.user?.apellidos}
                  </Typography>
                </FlexContainer>
                <FlexContainer direction="row" justify="center" padding="5px 0">
                  <Typography variant="caption2" color="info">
                    309 &nbsp;
                  </Typography>
                  <Typography variant="caption3">ordenes | &nbsp;</Typography>
                  <Typography variant="caption2" color="success">
                    97 % &nbsp;
                  </Typography>
                  <Typography variant="caption3">completado</Typography>
                </FlexContainer>
              </FlexContainer>
            );
          }
        },
        {
          name: translate('my_sales.price'),
          accessor: 'price',
          width: 20,
          render: (row: ISales) => {
            return (
              <Typography align="center" variant="h6">
                {formatCurrency(row?.price || 0)} &nbsp; USDT
              </Typography>
            );
          }
        },
        {
          name: translate('my_sales.quantity'),
          accessor: 'quantity',
          width: 25,
          render: (row: ISales) => {
            return (
              <>
                <FlexContainer
                  direction="row"
                  align="flex-end"
                  justify="space-between"
                  padding="5px 30px"
                >
                  <Typography align="center" variant="caption2">
                    {translate('offers_list.available')}: &nbsp;
                  </Typography>
                  <Typography align="center" variant="body1">
                    {formatCurrency(row.quantity)}
                  </Typography>
                </FlexContainer>
                <FlexContainer
                  direction="row"
                  align="flex-end"
                  justify="space-between"
                  padding="5px 30px"
                >
                  <Typography align="center" variant="caption2">
                    {translate('offers_list.limit')}: &nbsp;
                  </Typography>
                  <Typography align="center" variant="body1">
                    (pronto) - (pronto)
                  </Typography>
                </FlexContainer>
              </>
            );
          }
        },
        {
          name: translate('my_sales.method_payment'),
          accessor: 'userMethodPayment.methodPayment.name',
          width: 20
        },
        {
          name: translate('global.actions'),
          width: 15,
          render: (item: ISales) => {
            return (
              <FlexContainer justify="center">
                <Button
                  disabled={item.state !== 'ENABLE'}
                  onClick={() => handleShowRequestOperation(item)}
                  size="xs"
                  variant="contained"
                  background="success"
                  color="light"
                  tooltip={translate('offers_list.buy')}
                  title={translate('offers_list.buy')}
                />
              </FlexContainer>
            );
          }
        }
      ]);
    }
  }, [theme, language, data, mount]);

  return { columns };
};
