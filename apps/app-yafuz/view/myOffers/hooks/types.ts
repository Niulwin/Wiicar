import { NamespaceTranslate } from 'core';

export type TUseConfig = {
  translate: (key: NamespaceTranslate) => string;
};
