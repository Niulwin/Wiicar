import { IInvoices, useMutation, useTranslate } from 'core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { message } from 'ui';
import { TOrderDetailsArgs, TUseOrderDetails } from './types';

export const useOrderDetails = ({ params }: TUseOrderDetails) => {
  const translate = useTranslate();
  const router = useRouter();
  const [steps, setSteps] = useState<
    {
      step: number;
      stage: string;
      title: string;
    }[]
  >([]);
  const {
    isLoading,
    data: orderDetail,
    mutate: getOrderDetail
  } = useMutation<IInvoices, Pick<TOrderDetailsArgs, 'type'>>(
    'invoice-validate',
    `invoices/validate/${params.id}?type=${params.type}`,
    {
      translateErrorPath: 'order_details'
    }
  );

  const { mutate: handleApproveSeller, isLoading: loadingApproveSeller } =
    useMutation<IInvoices, { invoiceId: string }>(
      'invoice-approval-seller',
      'invoices/approval',
      {
        onSuccess: () => {
          getOrderDetail({
            variables: {
              type: params.type
            }
          });
          message.success(translate('global.success_operation'));
        }
      }
    );

  const { mutate: paymentBuyer, isLoading: loadingPaymentBuyer } = useMutation<
    IInvoices,
    { invoiceId: string; photo: string }
  >('invoice-payment-buyer', 'invoices/payment', {
    formData: true,
    onSuccess: () => {
      getOrderDetail({ variables: { type: params.type } });
      message.success(translate('global.success_operation'));
    }
  });

  const { mutate: handleCancelSeller, isLoading: loadingCancelSeller } =
    useMutation<IInvoices, { invoiceId: string; paymentNotReceived?: boolean }>(
      'invoice-cancel-seller',
      'invoices/cancel-seller',
      {
        onSuccess: () => {
          router.push('/my-sales');
          message.success(translate('global.success_operation'));
        }
      }
    );

  const { mutate: handleCancelBuyer, isLoading: loadingCancelBuyer } =
    useMutation<IInvoices, { invoiceId: string }>(
      'invoice-cancel-buyer',
      'invoices/cancel-buyer',
      {
        onSuccess: () => {
          router.push('/my-shopping');
          message.success(translate('global.success_operation'));
        }
      }
    );

  const handlePaymentBuyer = ({
    invoiceId,
    photo
  }: {
    invoiceId: string;
    photo?: File | null;
  }) => {
    if (!photo)
      return message.warn(translate('order_details.errors.FILE_MISSING'));

    const formData = new FormData();
    formData.append('invoiceId', invoiceId);
    formData.append('photo', photo);

    paymentBuyer({ variables: formData } as any);
  };

  useEffect(() => {
    if (params.type) getOrderDetail({ variables: { type: params.type } });
    const interval = setInterval(
      () => getOrderDetail({ variables: { type: params.type } }),
      60000
    );

    return () => {
      clearInterval(interval);
    };
  }, [params.id, params.type]);

  useEffect(() => {
    setSteps([
      {
        step: 0,
        stage: 'PROGRESS',
        title: translate('order_details.pending_payment')
      },
      {
        step: 1,
        stage: 'PAYMENT',
        title: translate('order_details.transfer_crypto')
      },
      {
        step: 2,
        stage: 'APPROVAL',
        title: translate('order_details.completed')
      }
    ]);
  }, [orderDetail]);

  return {
    isLoading,
    orderDetail,
    steps,
    loadingApproveSeller,
    handleApproveSeller,
    handlePaymentBuyer,
    loadingPaymentBuyer,
    handleCancelSeller,
    loadingCancelSeller,
    handleCancelBuyer,
    loadingCancelBuyer
  };
};
