import { ISales, TPagination } from 'core';

export type TUseConfig = {
  data?: TPagination<ISales>;
  translate: (key: string) => string;
  handleShowRequestOperation: (item: ISales) => void;
};

export type ISaleRequest = { salesId?: string; quantity?: number };
