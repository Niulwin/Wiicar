import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NamespaceTranslate, useTranslate } from 'core';
import { Fragment, MouseEvent } from 'react';
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
const sizes = {
  check: 'normal',
  delete: 'normal',
  info: 'large'
};

export const ActionTableOptions = ({
  buttons,
  onView,
  onDelete
}: TActionTableOptions) => {
  const translate = useTranslate();

  const handle = (
    ev: MouseEvent<HTMLButtonElement>,
    key: 'info' | 'delete' | 'check'
  ) => {
    switch (key) {
      case 'info':
        onView && onView(ev);
      case 'delete':
        onDelete && onDelete(ev);
    }
  };

  return (
    <FlexContainer direction="row">
      {buttons.map((bt, i) => (
        <Fragment key={`bt-${i}`}>
          <Button
            size={sizes[bt] as 'normal'}
            iconLeft={icons[bt] as IconProp}
            variant="contained"
            title={translate(`global.${titles[bt]}` as NamespaceTranslate)}
            background={colors[bt] as 'success' | 'error' | 'info'}
            color="light"
            onClick={(ev) => handle(ev, bt)}
          />
        </Fragment>
      ))}
    </FlexContainer>
  );
};
