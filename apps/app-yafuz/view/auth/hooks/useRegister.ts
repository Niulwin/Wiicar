import { joiResolver } from '@hookform/resolvers/joi';
import {
  ICountry,
  IUser,
  NamespaceCountryCode,
  NamespaceTranslate,
  SubmitHandler,
  TPagination,
  useForm,
  useLazyQuery,
  useMutation,
  useQuery
} from 'core';
import { useEffect, useState } from 'react';
import { message } from 'ui';
import { userSchema } from './schema.joi';

export const useRegister = ({
  translate,
  sponsorId,
  onSuccess
}: {
  sponsorId?: string;
  onSuccess: () => void;
  translate: (key: NamespaceTranslate) => string;
}) => {
  const [countryCode, setCountryCode] = useState<NamespaceCountryCode>('ES');
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IUser>({
    resolver: joiResolver(userSchema(countryCode))
  });
  const watchCountry = watch('country');
  const { mutate, isLoading } = useMutation<IUser, IUser>(
    'create-users',
    'users',
    {
      onSuccess: () => {
        message.success(translate('login.register_successful'));
        onSuccess && onSuccess();
      }
    }
  );
  const { data: dataCountries, isLoading: isLoadingCountry } = useQuery<
    TPagination<ICountry>
  >('all-countries', 'countries');
  const {
    mutate: mutateSponsor,
    data: dataSponsor,
    isLoading: isLoadingSponsor
  } = useLazyQuery<{
    name: string;
    lastName: string;
  }>(
    'get-sponsor',
    `users/sponsor/${sponsorId}?timestamp=${new Date().getTime()}`,
    { translateErrorPath: 'login' }
  );

  const onSubmit: SubmitHandler<IUser> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    const resCountry = dataCountries?.data?.find(
      (country) => country.id === watchCountry
    );
    setCountryCode(resCountry?.iso2 as NamespaceCountryCode);
  }, [watchCountry]);

  useEffect(() => {
    if (sponsorId) mutateSponsor({});
  }, [sponsorId]);

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    control,
    errors,
    isLoading,
    dataCountries: dataCountries,
    isLoadingCountry,
    countryCode,
    dataSponsor,
    isLoadingSponsor
  };
};
