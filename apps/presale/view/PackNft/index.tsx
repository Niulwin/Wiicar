import { useTranslate } from 'core';
import { Card, FlexContainer, Typography } from 'ui';

export const PackNft = () => {
  const translate = useTranslate();

  return (
    <FlexContainer direction="row">
      <Card mHeight="200px">
        <Typography variant="h5" color="textPrimary">
          {translate('pack_nft.pack_name')}
        </Typography>
      </Card>
      <Card mHeight="200px">
        <Typography variant="h5" color="textPrimary">
          {translate('pack_nft.pack_name')}
        </Typography>
      </Card>
      <Card mHeight="200px">
        <Typography variant="h5" color="textPrimary">
          {translate('pack_nft.pack_name')}
        </Typography>
      </Card>
      <Card mHeight="200px">
        <Typography variant="h5" color="textPrimary">
          {translate('pack_nft.pack_name')}
        </Typography>
      </Card>
    </FlexContainer>
  );
};
