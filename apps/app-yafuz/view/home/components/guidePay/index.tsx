import { Card, Typography } from 'ui';
import { Container, ContentOptions, Img, Text } from './styled';

const GuidePaySections = [
  {
    icon: 'list',
    title: 'Efectuar una orden',
    info: 'Cuando efectúes una orden P2P, el activo de criptomonedas se custodiará en P2P.'
  },
  {
    icon: 'list',
    title: 'Pagar al vendedor',
    info: 'Envía el dinero al vendedor a través de los métodos de pago sugeridos. Completa la transacción de fiat y haz clic en «Transferido, notificar al vendedor» en P2P.'
  },
  {
    icon: 'list',
    title: 'Consigue tus criptomonedas',
    info: 'Cuando el vendedor confirme la recepción del dinero, las criptomonedas custodiadas se liberarán y las recibirás.'
  },
  {
    icon: 'list',
    title: 'Efectuar una orden',
    info: 'Tras efectuar una orden, el activo de criptomonedas se custodiará en P2P.'
  },
  {
    icon: 'list',
    title: 'Confirmar el pago',
    info: 'Comprueba el registro de la transacción en la cuenta de pago indicada y asegúrate de que recibes el dinero que te ha enviado el comprador.'
  },
  {
    icon: 'list',
    title: 'Libera las criptomonedas',
    info: 'Cuando confirmes la recepción del dinero, libera las criptomonedas al comprador en P2P.'
  }
];

export const GuidePay = () => {
  return (
    <Container>
      <Typography variant="caption">Como funciona P2P</Typography>
      <ContentOptions>
        {GuidePaySections.map((x: any, i: number) => (
          <Card justify="flex-start" mHeight="250px" key={`Card${i}`}>
            <Img src="/icons/coin.jpg" />
            <Text weight="600">{x?.title}</Text>
            <Text>{x?.info}</Text>
          </Card>
        ))}
      </ContentOptions>
    </Container>
  );
};
