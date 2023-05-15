var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { useModalActions, useModalValue } from './ModalContext';
export var useModal = function () {
    var _a = [useModalValue(), useModalActions()], isModalOpen = _a[0], _b = _a[1], closeModal = _b.closeModal, openModal = _b.openModal;
    var Modal = function (_a) {
        var options = _a.options, children = _a.children;
        var handleKeyDown = function (_a) {
            var key = _a.key;
            if (key === 'Escape')
                closeModal();
        };
        useEffect(function () {
            window.addEventListener('keyup', handleKeyDown);
            return function () { return window.removeEventListener('keyup', handleKeyDown); };
        });
        useEffect(function () {
            window.addEventListener('keyup', handleKeyDown);
        });
        return (_jsx("div", { children: isModalOpen &&
                ReactDOM.createPortal(_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-background", onClick: function () { return closeModal(); } }), _jsx("div", __assign({ className: "modal ".concat((options === null || options === void 0 ? void 0 : options.position) || 'middle') }, { children: children }))] }), document.querySelector('#modal-root')) }));
    };
    return { isModalOpen: isModalOpen, closeModal: closeModal, openModal: openModal, Modal: Modal };
};
