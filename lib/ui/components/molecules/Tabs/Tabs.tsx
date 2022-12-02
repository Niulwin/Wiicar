import { FC } from 'react';
import { AntTabs } from './styled';
import { TTabsProps } from './types';

export const Tabs: FC<TTabsProps> = ({ items }: TTabsProps) => {
  return (
    <AntTabs defaultActiveKey="1" style={{ width: '100%' }} items={items} />
  );
};
