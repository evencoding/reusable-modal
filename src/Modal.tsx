import React, { MouseEvent, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import useModalSwitch from './useModalSwitch';

import './styles.css';

interface ModalOptions {
  position?: 'middle' | 'bottom';
  initState?: boolean;
  closeTrigger?: string;
}

interface ModalProps {
  children: ReactNode;
  trigger?: any;
  options?: ModalOptions;
}

const Modal = ({ trigger, children, options }: ModalProps) => {
  const { modalRoot, isModalOpen, openModal, closeModal } = useModalSwitch(options?.initState);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);

    return () => window.removeEventListener('keyup', handleKeyDown);
  });

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') closeModal();
  };

  const closeIf = ({ target }: MouseEvent) => {
    if (!options?.closeTrigger) return;

    if ((target as HTMLElement).closest(`.${options.closeTrigger}`)) {
      closeModal();
    }
  };

  return (
    <div>
      {trigger && React.cloneElement(trigger, { onClick: openModal })}
      {isModalOpen &&
        modalRoot &&
        ReactDOM.createPortal(
          <>
            <div className="modal-background" onClick={closeModal} />
            <div className={`modal ${options?.position || 'middle'}`} onClick={closeIf}>
              {children}
            </div>
          </>,
          document.querySelector('#modal-root') as HTMLElement
        )}
    </div>
  );
};

export default Modal;
