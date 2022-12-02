import { CSSProperties, PropsWithChildren } from 'react';

export interface TFlexContainerProps extends PropsWithChildren {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  padding?: string;
  width?: string;
  gap?: string;
  shadow?: boolean;
  position?: 'absolute' | 'relative' | 'fixed';
  direction?: 'column' | 'row' | 'row-reverse';
  sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  style?: CSSProperties;
  className?: string;
}

export const GridSystem = {
  grid_1: '8.333333333333333%',
  grid_2: '16.66666666666667%',
  grid_3: '25%',
  grid_4: '33.33333333333333%',
  grid_5: '41.66666666666667%',
  grid_6: '50%',
  grid_7: '58.33333333333333%',
  grid_8: '66.66666666666667%',
  grid_9: '75%',
  grid_10: '88.33333333333333%',
  grid_11: '91.66666666666667%',
  grid_12: '100%'
};
