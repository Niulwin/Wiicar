import { useTranslate } from 'core';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Home } from 'view/home';

function HomePage(): ReactElement {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Yafuz - {translate('global.menu_options.home')}</title>
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
