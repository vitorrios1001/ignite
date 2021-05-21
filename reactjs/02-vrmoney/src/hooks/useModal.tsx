import React from 'react';

const useModal = (isOpen = false) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(isOpen);

  const handleOpenModal = React.useCallback(
    () => setModalIsOpen(true),
    [setModalIsOpen],
  );
  const handleCloseModal = React.useCallback(
    () => setModalIsOpen(false),
    [setModalIsOpen],
  );

  return {
    handleOpenModal,
    handleCloseModal,
    modalIsOpen,
  };
};

export { useModal };
