import { useState } from 'react';
var useModalSwitch = function (initState) {
    var _a = useState(initState || false), isModalOpen = _a[0], setModalState = _a[1];
    var _b = useState(isModalOpen), shouldOpenModal = _b[0], setShouldOpenModal = _b[1];
    var getModalRoot = function () {
        var root = document.createElement('div');
        root.id = 'modal-root';
        return root;
    };
    var modalRoot = useState(getModalRoot())[0];
    var openModal = function () {
        if (!modalRoot || document.body.contains(modalRoot))
            return;
        document.body.appendChild(modalRoot);
        document.body.classList.add('overflow-hidden');
        setModalState(true);
    };
    var closeModal = function () {
        if (!modalRoot || !document.body.contains(modalRoot))
            return;
        document.body.removeChild(modalRoot);
        document.body.classList.remove('overflow-hidden');
        setModalState(false);
    };
    if (shouldOpenModal) {
        openModal();
        setShouldOpenModal(false);
    }
    return { isModalOpen: isModalOpen, openModal: openModal, closeModal: closeModal };
};
export default useModalSwitch;
