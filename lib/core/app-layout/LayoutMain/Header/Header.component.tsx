import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ButtonCustom, ButtonLogOut, Head, Menu } from './styled';

export const HeaderView: FC<any> = () => {
  const router = useRouter();

  return (
    <Head>
      <img src="/TGI.png" alt="IMG" width="200px" height="55px" />
      <Menu>
        <Link href="/">
          <ButtonLogOut>Logout</ButtonLogOut>
        </Link>
        <ButtonCustom
          onClick={() => router.push('https://apes-education.technoapes.io/')}
        >
          University
        </ButtonCustom>
      </Menu>
    </Head>
  );
};
