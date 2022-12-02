import { FC, useState } from 'react';
import { Button } from '../../atoms';
import { PopoverChildren, PopoverContainer } from './styled';
import { TPopoverProps } from './types';

export const Popover: FC<TPopoverProps> = ({
  children,
  background,
  color,
  size,
  title,
  variant,
  buttonProps
}: TPopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverContainer
      background={background}
      variant={variant}
      style={{ fontWeight: 'bold' }}
    >
      <Button
        variant="outlined"
        color="primary"
        title={title}
        size="xl"
        iconRight="caret-down"
        onClick={() => setOpen((pre) => !pre)}
        {...buttonProps}
      />
      {open && <PopoverChildren>{children}</PopoverChildren>}
    </PopoverContainer>
  );
};
