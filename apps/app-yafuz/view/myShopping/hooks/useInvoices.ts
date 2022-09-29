import {
  IInvoices,
  NamespaceTranslate,
  TPagination,
  useMutation,
  useQuery
} from 'core';
import { message } from 'ui';

export const useInvoices = ({
  translate
}: {
  translate: (key: NamespaceTranslate) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<IInvoices>>(
    'invoices-shopping',
    'invoices?type=shopping'
  );
  const { mutate: handleCancelBuyer, isLoading: loadingCancelBuyer } =
    useMutation<IInvoices, { invoiceId: string }>(
      'invoice-cancel-buyer',
      'invoices/cancel-buyer',
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
    handleCancelBuyer,
    loadingCancelBuyer
  };
};
