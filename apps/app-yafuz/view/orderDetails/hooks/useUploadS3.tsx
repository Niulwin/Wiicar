import { ChangeEvent, useState } from 'react';

export const useUploadS3 = () => {
  //states
  const [showModal, setShowModal] = useState<boolean>(false);
  const [multipleCharge, setMultipleCharge] = useState<File | null>();
  const [multiple, setMultiple] = useState<{
    file?: string;
    name: string;
  }>();

  const handleIsOpenModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Click input file
   * @param {object} e Input Event
   * @return {void}
   */
  const chargeMultiple = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;
    const objectURL = files?.[0] && URL.createObjectURL(files?.[0]);
    setMultiple({ file: objectURL, name: files?.[0]?.name || '' });
    setMultipleCharge(files?.[0]);
    e.target.value = '';
  };

  return {
    showModal,
    handleIsOpenModal,
    chargeMultiple,
    multiple,
    multipleCharge
  };
};
