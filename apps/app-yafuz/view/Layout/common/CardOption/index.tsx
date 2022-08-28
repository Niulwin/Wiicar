import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import { Card } from '../Card';

export const CardComponent = ({ title, icon, onClick }: any) => {
  return (
    <Card mHeight="152px" onClick={onClick}>
      <FontAwesomeIcon icon={icon} color="#622CFF" size="3x" />
      <Typography variant="subtitle1">{title || ''}</Typography>
    </Card>
  );
};
