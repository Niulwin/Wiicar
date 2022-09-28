import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { OrderDetails } from 'view/orderDetails';

function OrderDetailsPage(): ReactElement {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.offers_list')}</title>
      </Head>
      <OrderDetails />
    </>
  );
}

export default OrderDetailsPage;
