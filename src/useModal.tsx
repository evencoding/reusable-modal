import { PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { useModalActions, useModalValue } from './ModalContext';

interface ModalOptions {
  position?: 'middle' | 'bottom';
}

interface ModalProps {
  options?: ModalOptions;
}

export const useModal = () => {
  const [isModalOpen, { closeModal, openModal }] = [useModalValue(), useModalActions()];

  const Modal = ({ options, children }: PropsWithChildren<ModalProps>) => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') closeModal();
    };

    useEffect(() => {
      window.addEventListener('keyup', handleKeyDown);

      return () => window.removeEventListener('keyup', handleKeyDown);
    });

    useEffect(() => {
      window.addEventListener('keyup', handleKeyDown);
    });

    return (
      <div>
        {isModalOpen &&
          ReactDOM.createPortal(
            <>
              <div className="modal-background" onClick={() => closeModal()} />
              <div className={`modal ${options?.position || 'middle'}`}>{children}</div>
            </>,
            document.querySelector('#modal-root') as HTMLElement
          )}
      </div>
    );
  };

  return { isModalOpen, closeModal, openModal, Modal };
};
