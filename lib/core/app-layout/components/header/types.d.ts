import { IExchangeCurrency, TCurrentUser } from '../../../entities';

export type THeaderProps = {
  hiddenLogin?: boolean;
  isSession: boolean;
  currentUser?: TCurrentUser;
  logout: () => void;
  currentExchangeCurrency: IExchangeCurrency;
  changeCurrentExchangeCurrency: (value: IExchangeCurrency) => void;
};
