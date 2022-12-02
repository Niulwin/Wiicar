import Head from 'next/head';
import { ReactElement } from 'react';
import { Cars } from 'view/cars';

function CarsPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Wiicar</title>
      </Head>
      <Cars />
    </>
  );
}

export default CarsPage;
