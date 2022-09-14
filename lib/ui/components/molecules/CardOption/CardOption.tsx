import { Card, Typography } from 'ui';
import { Icon } from './styled';
import { TCardOption } from './types';

export const CardOption = ({ title, icon, onClick }: TCardOption) => {
  return (
    <Card mHeight="152px" onClick={onClick}>
      <Icon icon={icon} size="3x" />
      <Typography variant="subtitle">{title || ''}</Typography>
    </Card>
  );
};
