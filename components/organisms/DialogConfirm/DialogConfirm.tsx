import { Button } from '../../atoms';
import { Card } from '../../molecules';
import { TDialogConfirmProps } from './types';

export const DialogConfirm = ({ buttonTitle }: TDialogConfirmProps) => {
  return (
    <div>
      <Card buttonTitle="Button" label="Label" />
      <Button title={buttonTitle} />
    </div>
  );
};
