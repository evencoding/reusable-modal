import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface Props {
  initState?: boolean;
  children: ReactNode;
}

interface Actions {
  openModal: () => void;
  closeModal: () => void;
}

const ModalValueContext = createContext<boolean | undefined>(undefined);
const ModalActionsContext = createContext<Actions | undefined>(undefined);

export const ModalProvider = ({ initState, children }: Props) => {
  const [modalState, setModalState] = useState(initState || false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const actions = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    []
  );

  return (
    <ModalActionsContext.Provider value={actions}>
      <ModalValueContext.Provider value={modalState}>{children}</ModalValueContext.Provider>
    </ModalActionsContext.Provider>
  );
};

export const useModalValue = () => {
  const state = useContext(ModalValueContext);
  if (state === undefined) throw Error('cannot find Provider');
  return state;
};

export const useModalActions = () => {
  const actions = useContext(ModalActionsContext);
  if (!actions?.openModal || !actions?.closeModal) throw Error('cannot find Provider');
  return actions;
};
