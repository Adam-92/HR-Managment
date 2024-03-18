import { useState, useCallback } from 'react';

export type UseModalForm = {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

export const useModalForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
  };
};
