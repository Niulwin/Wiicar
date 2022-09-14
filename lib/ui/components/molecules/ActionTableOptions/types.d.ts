import React from 'react';

export type TActionTableOptions = {
  buttons: ('info' | 'delete' | 'check')[];
  onEdit?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onSuccess?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCheck?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
