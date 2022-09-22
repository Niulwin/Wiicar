import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { Banks } from 'view/banks';

function BanksPage(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.my_banks')}</title>
      </Head>
      {mount ? <Banks /> : null};
    </>
  );
}

export default BanksPage;
