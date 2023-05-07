import { useState } from 'react';

const useModalSwitch = (initState?: boolean) => {
  const [isModalOpen, setModalState] = useState(initState || false);
  const [shouldOpenModal, setShouldOpenModal] = useState(isModalOpen);

  const getModalRoot = () => {
    const root = document.createElement('div');
    root.id = 'modal-root';

    return root;
  };
  const [modalRoot] = useState<HTMLElement>(getModalRoot());

  const openModal = () => {
    if (!modalRoot || document.body.contains(modalRoot)) return;

    document.body.appendChild(modalRoot);
    document.body.classList.add('overflow-hidden');

    setModalState(true);
  };

  const closeModal = () => {
    if (!modalRoot || !document.body.contains(modalRoot)) return;

    document.body.removeChild(modalRoot);
    document.body.classList.remove('overflow-hidden');

    setModalState(false);
  };

  if (shouldOpenModal) {
    openModal();
    setShouldOpenModal(false);
  }

  return { isModalOpen, openModal, closeModal };
};

export default useModalSwitch;
