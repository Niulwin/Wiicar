import {
  ISales,
  NamespaceTranslate,
  TPagination,
  useMutation,
  useQuery
} from 'core';
import { message } from 'ui';

export const useMyOffers = ({
  translate,
  handleShowModal,
  offerId
}: {
  offerId?: string;
  handleShowModal: (active: boolean) => void;
  translate: (key: NamespaceTranslate) => string;
}) => {
  const { data, isLoading, refetch } = useQuery<TPagination<ISales>>(
    'my-offers',
    'sales/my-sales'
  );

  const { mutate: deleteSale, isLoading: loadingDeleteSale } =
    useMutation<ISales>('edit-sale', `sales`, {
      translateErrorPath: 'offers_list',
      httpMethod: 'DELETE',
      onSuccess: () => {
        refetch();
        handleShowModal(false);
        message.success(translate('global.success_operation'));
      }
    });

  const handleDeleteSale = ({ saleId }: { saleId: string }) =>
    deleteSale({
      params: [saleId]
    });

  return {
    data: data,
    isLoading,
    refetch,
    handleDeleteSale,
    loadingDeleteSale
  };
};
