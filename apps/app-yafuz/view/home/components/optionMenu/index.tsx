import Typography from '@mui/material/Typography';
import { CardOption } from 'ui';
import { Container, ContentOptions } from './styled';

const OptionMenu = [
  {
    icon: 'list',
    title: 'Lista de ofertas'
  },
  {
    icon: 'shopping-cart',
    title: 'Mis Compras'
  },
  {
    icon: 'exchange',
    title: 'Mis Ventas'
  },
  {
    icon: 'piggy-bank',
    title: 'Mis cuentas'
  },
  {
    icon: 'university',
    title: 'Bancos'
  },
  {
    icon: 'user-circle',
    title: 'Perfil'
  }
];

export const SectionMenu = () => {
  return (
    <Container>
      <Typography variant="subtitle1">Accesos directos</Typography>
      <ContentOptions>
        {OptionMenu.map((x: typeof OptionMenu[0], i: number) => (
          <CardOption icon={x?.icon} title={x?.title} key={`Test${i}`} />
        ))}
      </ContentOptions>
    </Container>
  );
};
