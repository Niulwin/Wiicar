export type TModalProps = {
  title: string;
  footer?: boolean;
  loading?: boolean;
  isVisible: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
  children: JSX.Element | JSX.Element[];
};
