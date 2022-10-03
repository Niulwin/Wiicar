import { useTranslate } from 'core';
import { Modal, ModalFooter } from 'ui';

export const UploadFileS3 = ({ isVisible, handleIsOpenModal }: any) => {
  const translate = useTranslate();

  return (
    <Modal
      footer={false}
      title={translate('order_details.actions.upload_file')}
      isVisible={isVisible}
      onCancel={() => handleIsOpenModal()}
    >
      <ModalFooter
        onAccept={() => handleIsOpenModal()}
        onCancel={handleIsOpenModal}
      />
    </Modal>
  );
};
