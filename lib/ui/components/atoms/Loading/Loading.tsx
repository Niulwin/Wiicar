import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { Spinner, SpinnerContainer } from './styled';
import { TLoadingProps } from './types';

export const Loading: FC<TLoadingProps> = ({ color }: TLoadingProps) => {
  return (
    <SpinnerContainer>
      <Spinner icon={faSpinner} color={color} size="2x" />
    </SpinnerContainer>
  );
};
