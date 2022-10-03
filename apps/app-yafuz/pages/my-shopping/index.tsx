import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { MyShopping } from 'view/myShopping';

function MyShoppingPage(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.my_shopping')}</title>
      </Head>
      {mount ? <MyShopping /> : null}
    </>
  );
}

export default MyShoppingPage;
