//Imports
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LayoutAuth, LayoutMain, QueryClientProvider, SafeHydrate } from 'core';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import 'styles/global.css';
import { ThemeGlobal } from '../styles/theme.context';

// Icons
config.autoAddCss = false;
library.add(fas);

//layouts
type TLayouts = {
  L1: FC<{ children: JSX.Element | JSX.Element[]; sidebars: boolean }>;
  L2: FC<{ children: JSX.Element | JSX.Element[]; sidebars: boolean }>;
};
type TAppPropsWithCustomProps = AppProps & {
  Component: NextPage & {
    layout: string;
    sidebars: boolean;
  };
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
  pageProps,
  router
}: TAppPropsWithCustomProps): JSX.Element | JSX.Element[] {
  const CurrentLayout = layouts[(Component?.layout || 'L1') as keyof TLayouts];

  return (
    <SafeHydrate>
      <QueryClientProvider>
        <ThemeGlobal>
          <CurrentLayout sidebars={Component.sidebars}>
            <Component router={router} {...pageProps} />
          </CurrentLayout>
        </ThemeGlobal>
      </QueryClientProvider>
    </SafeHydrate>
  );
}

export default MyApp;
