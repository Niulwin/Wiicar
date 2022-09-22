import { useRouter } from 'next/router';
import { CardOption, Typography } from 'ui';
import { Container, ContentOptions } from './styled';

const OptionMenu = [
  {
    icon: 'list',
    title: 'Lista de ofertas',
    route: 'offer-list'
  },
  {
    icon: 'shopping-cart',
    title: 'Mis Compras',
    route: 'my-shopping'
  },
  {
    icon: 'exchange',
    title: 'Mis Ventas',
    route: 'my-sales'
  },
  {
    icon: 'piggy-bank',
    title: 'Mis cuentas',
    route: 'my-accounts'
  },
  {
    icon: 'university',
    title: 'Bancos',
    route: 'banks'
  }
];

export const SectionMenu = () => {
  const router = useRouter();
  return (
    <Container>
      <Typography variant="caption">Accesos directos</Typography>
      <ContentOptions>
        {OptionMenu.map((x: typeof OptionMenu[0], i: number) => (
          <CardOption
            key={`Test${i}`}
            icon={x?.icon}
            title={x?.title}
            onClick={() => router.push(x.route)}
          />
        ))}
      </ContentOptions>
    </Container>
  );
};
