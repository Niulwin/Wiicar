import React from 'react';

export type TActionTableOptions = {
  buttons: ('info' | 'delete' | 'check')[];
  onEdit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onView?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSuccess?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
