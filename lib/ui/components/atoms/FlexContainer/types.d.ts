export type TFlexContainerProps = {
  children: JSX.Element | JSX.Element[];
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
  position?: 'absolute' | 'relative' | 'fixed';
  direction?: 'column' | 'row' | 'row-reverse';
  width?: string | number;
};
