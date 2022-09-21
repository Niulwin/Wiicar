import { FlexContainer, ModalFooter, TextField } from 'ui';
import { useTranslate } from '../../../../lib/core/i18n/hooks/useTranslate';
import { useCreateBank } from './hooks';
import { TUseCreteBank } from './hooks/types';

export const CreateBank = ({ setShowModal, refetch }: TUseCreteBank) => {
  const translate = useTranslate();
  const { errors, handleSubmit, isLoading, register } = useCreateBank({
    setShowModal,
    refetch
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FlexContainer justify="space-between" direction="row">
        <TextField
          label={translate('bank.code')}
          name="code"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('bank.code')}
          error={errors.code}
        />
        <TextField
          label={translate('bank.name')}
          name="name"
          register={register}
          validate={{ required: true }}
          width="49%"
          placeholder={translate('bank.name')}
          error={errors.name}
        />
      </FlexContainer>
      <ModalFooter loading={isLoading} onCancel={() => setShowModal(false)} />
    </form>
  );
};
