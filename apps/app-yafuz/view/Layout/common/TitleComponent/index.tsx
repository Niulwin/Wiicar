import Typography from '@mui/material/Typography';
import { Section } from './styled';

export const TitleComponent = ({ title, subTitle }: any) => {
  return (
    <Section>
      <Typography variant="h5">{title || ''}</Typography>
      <Typography variant="subtitle2">{subTitle || ''}</Typography>
    </Section>
  );
};
