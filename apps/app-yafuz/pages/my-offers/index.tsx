import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { MyOffers } from 'view/myOffers';

function MyOffersPage(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.my_offers')}</title>
      </Head>
      {mount ? <MyOffers /> : null}
    </>
  );
}

export default MyOffersPage;
