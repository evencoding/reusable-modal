import { useEffect, useState } from 'react';
var useModalSwitch = function (initState) {
    var _a = useState(initState || false), isModalOpen = _a[0], setModalState = _a[1];
    useEffect(function () {
        if (isModalOpen) {
            document.body.appendChild(modalRoot);
        }
    });
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
    return { isModalOpen: isModalOpen, openModal: openModal, closeModal: closeModal };
};
export default useModalSwitch;
