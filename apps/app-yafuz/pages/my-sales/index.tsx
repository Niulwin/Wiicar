import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { MySalesView } from 'view/mySales';

function MySales(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.my_sales')}</title>
      </Head>
      {mount ? <MySalesView /> : null};
    </>
  );
}

export default MySales;
