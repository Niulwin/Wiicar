export type TContentProps = {
  children: JSX.Element | JSX.Element[];
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end';
  noPadding?: boolean;
};
