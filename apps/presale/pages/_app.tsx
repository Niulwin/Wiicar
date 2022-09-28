//Imports
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LayoutAuth, LayoutMain, QueryClientProvider, SafeHydrate } from 'core';
import AuthProvider from 'core/auth/AuthContext';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import 'styles/global.css';
import { DefaultTheme } from 'ui';

// Icons
config.autoAddCss = false;
library.add(fas);

//layouts
type TFCLayouts = {
  layout: string;
  children: JSX.Element | JSX.Element[];
  sidebars: boolean;
  hiddenSidebars: boolean;
  hiddenLogin: boolean;
};
type TLayouts = {
  L1: FC<Omit<TFCLayouts, 'layout'>>;
  L2: FC<Omit<TFCLayouts, 'layout'>>;
};
type TAppPropsWithCustomProps = AppProps & {
  Component: NextPage & Omit<TFCLayouts, 'children'>;
};
const layouts: TLayouts = {
  L1: LayoutMain,
  L2: LayoutAuth
};

/**
 * My App Component
 * @param {TAppPropsWithCustomProps} props MyApp properties
 * @returns {JSX.Element | JSX.Element[]} Component
 */
function MyApp({
  Component,
  pageProps
}: TAppPropsWithCustomProps): JSX.Element | JSX.Element[] {
  const CurrentLayout = layouts[(Component?.layout || 'L1') as keyof TLayouts];

  return (
    <SafeHydrate>
      <QueryClientProvider>
        <AuthProvider>
          <DefaultTheme>
            <CurrentLayout
              hiddenLogin={Component.hiddenLogin}
              sidebars={Component.sidebars}
              hiddenSidebars={Component.hiddenSidebars}
            >
              <Component {...pageProps} />
            </CurrentLayout>
          </DefaultTheme>
        </AuthProvider>
      </QueryClientProvider>
    </SafeHydrate>
  );
}

export default MyApp;
