import React from 'react';
export type TStepView = {
  step: number;
  title: string;
  description?: string;
};
export type TActionTableOptions = {
  menu: TStepView[];
  onEdit?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onSuccess?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCheck?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChange?: (index: number) => Promise<boolean>;
  current: number;
};
