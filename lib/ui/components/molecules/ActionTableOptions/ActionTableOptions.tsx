import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Fragment } from 'react';
import { Button, FlexContainer } from 'ui';
import { TActionTableOptions } from './types';

const icons = {
  check: 'check',
  delete: 'trash',
  info: 'eye'
};
const colors = {
  check: 'success',
  delete: 'error',
  info: 'info'
};
export const ActionTableOptions = ({ buttons }: TActionTableOptions) => {
  return (
    <FlexContainer direction="row">
      {buttons.map((bt, i) => (
        <Fragment key={`bt-${i}`}>
          <Button
            size="xs"
            iconLeft={icons[bt] as IconProp}
            variant="contained"
            background={colors[bt] as 'success' | 'error' | 'info'}
            color="light"
          />
        </Fragment>
      ))}
    </FlexContainer>
  );
};
