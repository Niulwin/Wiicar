import { Button, Label } from '../../atoms';
import { TCardProps } from './types';

export const Card = ({ buttonTitle, label }: TCardProps) => {
  return (
    <div>
      <Label title={label} />
      <Button title={buttonTitle} />
    </div>
  );
};
