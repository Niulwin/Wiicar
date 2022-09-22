import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { OfferList } from 'view/offerList';

function OfferListPage(): ReactElement {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.offers_list')}</title>
      </Head>
      <OfferList />
    </>
  );
}

export default OfferListPage;
