import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { OrderDetails } from 'view/orderDetails';

function OrderDetailsPage(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.offers_list')}</title>
      </Head>
      {mount ? <OrderDetails /> : null}
    </>
  );
}

export default OrderDetailsPage;
