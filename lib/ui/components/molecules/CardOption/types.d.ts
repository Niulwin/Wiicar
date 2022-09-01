import React from 'react';

export type TCardOption = {
  title: string;
  icon?: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
