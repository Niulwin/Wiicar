import { useTranslate } from 'core';
import { Button, Card, FlexContainer, Typography } from 'ui';

export const PackNft = () => {
  const translate = useTranslate();

  return (
    <FlexContainer align="flex-start">
      <Typography variant="h6">
        <>{translate('global.menu_options.pack_nft')} &gt;</>
      </Typography>
      <FlexContainer direction="column" justify="space-around">
        <FlexContainer direction="row" justify="space-around">
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
        </FlexContainer>
        <FlexContainer direction="row" justify="space-around">
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
          <Card variant="text" size="xl">
            <img src="/icons/yafuz.jpg" alt="" width="95%" height="130px" />
            <Typography variant="caption" color="textPrimary">
              Recibe 2 ligas NFT
            </Typography>
            <Button
              title={`${translate('pack_nft.actions.buy')}   |   U$15`}
              background="secondary"
              color="textSecondary"
              size="fullWidth"
            ></Button>
          </Card>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
