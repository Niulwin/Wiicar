import { TCurrentUser } from '../../../entities/auth';

export type THeaderProps = {
  hiddenLogin?: boolean;
  isSession: boolean;
  currentUser?: TCurrentUser;
};
