import { Card, FlexContainer, Typography } from 'ui';

export const PendingPayment = () => {
  return (
    <FlexContainer gap="10px">
      <FlexContainer gap="5px" padding="0" direction="row">
        <Card width="50%" gap="5px" direction="column" align="flex-start">
          <Typography variant="caption">Informacion de la orden</Typography>
          <FlexContainer padding="0" direction="row" align="flex-start">
            {[...Array(3)].map((x: any, i: number) => (
              <FlexContainer key={i} direction="column" align="flex-start">
                <Typography variant="caption">Cantidad</Typography>
                <Typography variant="caption">COL 3.000.000</Typography>
              </FlexContainer>
            ))}
          </FlexContainer>
        </Card>
        <Card width="50%" gap="5px" direction="column" align="flex-start">
          <Typography variant="caption">Informacion del vendedor</Typography>
          <FlexContainer padding="0" direction="row" align="flex-start">
            <FlexContainer direction="column" align="flex-start">
              <Typography variant="caption">Cantidad</Typography>
              <Typography variant="caption">COL 3.000.000</Typography>
            </FlexContainer>
          </FlexContainer>
        </Card>
      </FlexContainer>
      <FlexContainer
        padding="0"
        direction="column"
        justify="space-between"
        align="center"
      >
        <Card gap="5px" direction="row" align="flex-start">
          <FlexContainer padding="0" direction="column" align="flex-start">
            <Typography variant="caption">Metodo de pago</Typography>
            <Typography variant="caption">Bancolombia S.A</Typography>
          </FlexContainer>
          <FlexContainer padding="0" direction="column">
            {[...Array(4)].map((x: any, i: number) => (
              <FlexContainer key={i} direction="column" align="flex-start">
                <Typography variant="caption">Nombre</Typography>
                <Typography variant="caption">
                  Jose Gregorio Gonzalez
                </Typography>
              </FlexContainer>
            ))}
          </FlexContainer>
        </Card>
      </FlexContainer>
      <FlexContainer gap="10px" direction="column" align="flex-start">
        <Typography variant="caption">
          ¿Que deberia hacer tras recibir el pago?
        </Typography>
        <Typography variant="caption">
          ¿Que deberia hacer si la otra parte no realizo el pago?
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
