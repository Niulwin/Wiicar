import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { usePrivateRoute } from 'utils/usePrivateRoute';
import { MyAccounts } from 'view/myAccounts';

function MyAccountsPage(): ReactElement {
  const { mount } = usePrivateRoute({ isPrivate: true });
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.my_banks')}</title>
      </Head>
      {mount ? <MyAccounts /> : null}
    </>
  );
}

export default MyAccountsPage;
