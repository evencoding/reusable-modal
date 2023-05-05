import { useEffect, useState } from 'react';

const useModalSwitch = (initState?: boolean) => {
  const [isModalOpen, setModalState] = useState(initState || false);
  const [openWhenInitRender, setOpenWhenInitRender] = useState(isModalOpen);

  useEffect(() => {
    if (initState) {
      document.body.appendChild(modalRoot);
    }
  });

  const getModalRoot = () => {
    const root = document.createElement('div');
    root.id = 'modal-root';

    return root;
  };
  const [modalRoot] = useState<HTMLElement>(getModalRoot());

  if (openWhenInitRender) {
    document.body.appendChild(modalRoot);
    setOpenWhenInitRender(false);
  }

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

  return { isModalOpen, openModal, closeModal };
};

export default useModalSwitch;
