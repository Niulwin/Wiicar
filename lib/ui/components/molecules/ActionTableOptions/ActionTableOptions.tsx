import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NamespaceTranslate, useTranslate } from 'core';
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
const titles = {
  check: 'accept',
  delete: 'delete',
  info: 'view'
};
export const ActionTableOptions = ({ buttons }: TActionTableOptions) => {
  const translate = useTranslate();

  return (
    <FlexContainer direction="row">
      {buttons.map((bt, i) => (
        <Fragment key={`bt-${i}`}>
          <Button
            size="small"
            iconLeft={icons[bt] as IconProp}
            variant="contained"
            title={translate(`global.${titles[bt]}` as NamespaceTranslate)}
            background={colors[bt] as 'success' | 'error' | 'info'}
            color="light"
          />
        </Fragment>
      ))}
    </FlexContainer>
  );
};
