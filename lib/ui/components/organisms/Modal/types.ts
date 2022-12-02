export type TModalProps = {
  title: string;
  footer?: boolean;
  loading?: boolean;
  isVisible: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
  size?: 'xs' | 'sm' | 'normal' | 'lg' | 'xl';
  children: JSX.Element | JSX.Element[];
};

export enum ModalSize {
  'xs' = 520,
  'sm' = 720,
  'normal' = 1024,
  'lg' = 1240,
  'xl' = 1344
}
