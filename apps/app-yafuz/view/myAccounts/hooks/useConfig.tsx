import {
  IUserMethodPayments,
  NamespaceTranslate,
  TPagination,
  useI18n
} from 'core';
import { useEffect, useState } from 'react';
import { ActionTableOptions, FlexContainer, TTableColumns, useTheme } from 'ui';

export const useConfig = ({
  translate,
  data,
  handleEdit
}: {
  translate: (key: NamespaceTranslate) => string;
  data?: TPagination<IUserMethodPayments>;
  handleEdit: (row: IUserMethodPayments) => void;
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
        render: (_row: IUserMethodPayments, index: number) => {
          return index + 1;
        }
      },
      {
        name: translate('my_accounts.code'),
        width: 50,
        accessor: 'methodPayment.code'
      },
      {
        name: translate('my_accounts.method_payment'),
        width: 50,
        accessor: 'methodPayment.name'
      },
      {
        name: translate('global.actions'),
        width: 300,
        fixed: true,
        render: (row: IUserMethodPayments) => {
          return (
            <FlexContainer justify="center" direction="row">
              <ActionTableOptions
                buttons={['info', 'delete']}
                onView={() => handleEdit(row)}
              />
            </FlexContainer>
          );
        }
      }
    ]);
  }, [theme, language, data?.total]);

  return { columns };
};
