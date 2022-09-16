import Head from 'next/head';
import { PackNft } from 'view/PackNft';

const PackNftPage = () => {
  return (
    <>
      <Head>
        <title>Yafuz - Pack NFT</title>
      </Head>
      <PackNft />
    </>
  );
};

PackNftPage.layout = 'L1';

export default PackNftPage;
