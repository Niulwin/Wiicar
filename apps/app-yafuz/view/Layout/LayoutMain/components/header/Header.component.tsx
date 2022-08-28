import { FC } from 'react';
import {
  BoxOptions,
  BoxUser,
  Head,
  InfoUser,
  Section,
  TextInfo
} from './styled';

export const HeaderView: FC<any> = () => {
  return (
    <Head>
      <Section width="80%"></Section>
      <Section width="20%">
        <BoxOptions>
          <InfoUser>
            <TextInfo>John Doe</TextInfo>
            <TextInfo>admin</TextInfo>
          </InfoUser>
          <BoxUser>J</BoxUser>
        </BoxOptions>
      </Section>
    </Head>
  );
};
