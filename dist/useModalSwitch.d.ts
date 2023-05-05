declare const useModalSwitch: (initState?: boolean) => {
    modalRoot: HTMLElement;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};
export default useModalSwitch;
