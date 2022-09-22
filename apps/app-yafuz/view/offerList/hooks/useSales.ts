import { IInvoices, ISales, TPagination, useMutation, useQuery } from 'core';
import { message } from 'ui';

export const useSales = ({
  translate
}: {
  translate: (key: string) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<ISales>>(
    'sales',
    'sales'
  );

  const { mutate: handleRequest, isLoading: loadingRequest } = useMutation<
    { salesId: string },
    IInvoices
  >('invoice-request', 'invoices/request', {
    onSuccess: () => {
      refetch();
      message.success(translate('global.success_operation'));
    }
  });

  return { data: data, refetch, isLoading, handleRequest, loadingRequest };
};
