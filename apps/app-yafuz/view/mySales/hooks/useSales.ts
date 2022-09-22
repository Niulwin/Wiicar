import { IInvoices, TPagination, useMutation, useQuery } from 'core';
import { message } from 'ui';

export const useSales = ({
  translate
}: {
  translate: (key: string) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<IInvoices>>(
    'invoices-sales',
    'invoices?type=sales'
  );
  const { mutate: handleCancelSeller, isLoading: loadingCancelSeller } =
    useMutation<{ invoiceId: string }, IInvoices>(
      'invoice-cancel-seller',
      'invoices/cancel-seller',
      {
        onSuccess: () => {
          refetch();
          message.success(translate('global.success_operation'));
        }
      }
    );
  const { mutate: handleApproveSeller, isLoading: loadingApproveSeller } =
    useMutation<{ invoiceId: string }, IInvoices>(
      'invoice-approval-seller',
      'invoices/approval',
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
    loadingCancelSeller,
    handleApproveSeller,
    loadingApproveSeller
  };
};
