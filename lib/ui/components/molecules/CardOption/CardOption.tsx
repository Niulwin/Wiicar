import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import { Card } from 'ui';
import { TCardOption } from './types';

export const CardOption = ({ title, icon, onClick }: TCardOption) => {
  return (
    <Card mHeight="152px" onClick={onClick}>
      <FontAwesomeIcon icon={icon} color="#622CFF" size="3x" />
      <Typography variant="subtitle1">{title || ''}</Typography>
    </Card>
  );
};
