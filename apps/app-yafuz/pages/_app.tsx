//Imports
import type { AppProps } from 'next/app';
import '../styles/styles.css';
import { ThemeGlobal } from '../styles/theme.context';

// Layouts
import { NextPage } from 'next';
import { FC, ReactNode, useEffect, useState } from 'react';
import { LayoutAuth } from '../view/Layout/LayoutAuth';
import { LayoutMain } from '../view/Layout/LayoutMain';

//Styled
import 'antd/dist/antd.css';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Library
library.add(fas);

//layouts
const layouts: any = {
  L1: LayoutMain,
  L2: LayoutAuth
};

type TAppPropsWithCustomProps = AppProps & {
  Component: NextPage & {
    layout: string;
    sidebars: boolean;
  };
};

const SafeHydrate: FC<{ children: ReactNode }> = ({ children }) => {
  const [hydrate, SetHydrate] = useState<any>(null);

  useEffect(() => {
    SetHydrate(children);
  }, [children]);

  return <div suppressHydrationWarning>{hydrate}</div>;
};

function MyApp({ Component, pageProps, router }: TAppPropsWithCustomProps) {
  const CurrentLayout = layouts[Component?.layout || 'L1'];

  return (
    <SafeHydrate>
      <ThemeGlobal>
        <CurrentLayout sidebars={Component.sidebars}>
          <Component router={router} {...pageProps} />
        </CurrentLayout>
      </ThemeGlobal>
    </SafeHydrate>
  );
}

export default MyApp;
