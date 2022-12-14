//Imports
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  LayoutMain,
  numeralConfig,
  QueryClientProvider,
  SafeHydrate
} from 'core';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import 'styles/global.css';
import { DefaultTheme } from 'ui';

// Icons
config.autoAddCss = false;
library.add(fas);

//layouts
type TFCLayouts = {
  layout: string;
  children: JSX.Element | JSX.Element[];
};
type TLayouts = {
  L1: FC<Omit<TFCLayouts, 'layout'>>;
};
type TAppPropsWithCustomProps = AppProps & {
  Component: NextPage & Omit<TFCLayouts, 'children'>;
};
const layouts: TLayouts = {
  L1: LayoutMain
};

/**
 * My App Component
 * @param {TAppPropsWithCustomProps} props MyApp properties
 * @returns {JSX.Element | JSX.Element[]} Component
 */
function MyApp({
  Component,
  pageProps,
  router
}: TAppPropsWithCustomProps): JSX.Element | JSX.Element[] {
  const CurrentLayout = layouts[(Component?.layout || 'L1') as keyof TLayouts];

  useEffect(() => {
    numeralConfig();
  }, []);

  return (
    <SafeHydrate>
      <QueryClientProvider>
        <DefaultTheme>
          <CurrentLayout>
            <Component router={router} {...pageProps} />
          </CurrentLayout>
        </DefaultTheme>
      </QueryClientProvider>
    </SafeHydrate>
  );
}

export default MyApp;
