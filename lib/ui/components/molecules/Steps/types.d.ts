import React from 'react';

export type TActionTableOptions = {
  menu: any;
  onEdit?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onSuccess?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCheck?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
