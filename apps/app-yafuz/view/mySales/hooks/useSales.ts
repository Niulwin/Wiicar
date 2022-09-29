import {
  IInvoices,
  NamespaceTranslate,
  TPagination,
  useMutation,
  useQuery
} from 'core';
import { message } from 'ui';

export const useSales = ({
  translate
}: {
  translate: (key: NamespaceTranslate) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<IInvoices>>(
    'invoices-sales',
    'invoices?type=sales'
  );
  const { mutate: handleCancelSeller, isLoading: loadingCancelSeller } =
    useMutation<IInvoices, { invoiceId: string }>(
      'invoice-cancel-seller',
      'invoices/cancel-seller',
      {
        onSuccess: () => {
          refetch();
          message.success(translate('global.success_operation'));
        }
      }
    );

  return {
    data: data,
    isLoading,
    refetch,
    handleCancelSeller,
    loadingCancelSeller
  };
};
