import { ISales, NamespaceTranslate, TPagination } from 'core';

export type TUseConfig = {
  data?: TPagination<ISales>;
  translate: (key: NamespaceTranslate) => string;
  handleShowRequestOperation: (item: ISales) => void;
};

export type ISaleRequest = { salesId?: string; quantity?: number };
