import { IInvoices, TPagination, useMutation, useQuery } from 'core';
import { message } from 'ui';

export const useInvoices = ({
  translate
}: {
  translate: (key: string) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<IInvoices>>(
    'invoices-shopping',
    'invoices?type=shopping'
  );
  const { mutate: handleCancelBuyer, isLoading: loadingCancelBuyer } =
    useMutation<{ invoiceId: string }, IInvoices>(
      'invoice-cancel-buyer',
      'invoices/cancel-buyer',
      {
        onSuccess: () => {
          refetch();
          message.success(translate('global.success_operation'));
        }
      }
    );
  const { mutate: handlePaymentBuyer, isLoading: loadingPaymentBuyer } =
    useMutation<{ invoiceId: string; photo: string }, IInvoices>(
      'invoice-payment-buyer',
      'invoices/payment',
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
    loadingCancelBuyer,
    handlePaymentBuyer,
    loadingPaymentBuyer
  };
};
