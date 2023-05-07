declare const useModalSwitch: (initState?: boolean) => {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};
export default useModalSwitch;
