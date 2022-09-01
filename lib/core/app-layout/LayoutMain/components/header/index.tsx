import Image from 'next/image';
import { FC } from 'react';
import {
  BoxOptions,
  BoxUser,
  Head,
  InfoUser,
  Section,
  TextInfo
} from './styled';

export const Header: FC = () => {
  return (
    <Head>
      <Section justify="flex-start" width="20%">
        <Image src="/logo.svg" alt="logo" width={90} height={100} />
      </Section>
      <Section width="80%">
        <BoxOptions>
          <InfoUser>
            <TextInfo>Angelo user</TextInfo>
            <TextInfo>admin</TextInfo>
          </InfoUser>
          <BoxUser>A</BoxUser>
        </BoxOptions>
      </Section>
    </Head>
  );
};
