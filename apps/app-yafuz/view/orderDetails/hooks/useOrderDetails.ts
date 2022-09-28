import { IInvoices, useLazyQuery, useTranslate } from 'core';
import { useEffect, useState } from 'react';
import { TOrderDetailsArgs, TUseOrderDetails } from './types';

export const useOrderDetails = ({ params }: TUseOrderDetails) => {
  const translate = useTranslate();
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
  } = useLazyQuery<IInvoices, Pick<TOrderDetailsArgs, 'type'>>(
    'invoices-validate',
    `invoices/validate/${params.id}`,
    {
      translateErrorPath: 'order_details'
    }
  );

  useEffect(() => {
    if (params.type)
      getOrderDetail({
        type: params.type
      });
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
    steps
  };
};
