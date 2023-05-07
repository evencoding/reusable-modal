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
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import useModalSwitch from './useModalSwitch';
import './styles.css';
var Modal = function (_a) {
    var trigger = _a.trigger, children = _a.children, options = _a.options;
    var _b = useModalSwitch(options === null || options === void 0 ? void 0 : options.initState), isModalOpen = _b.isModalOpen, openModal = _b.openModal, closeModal = _b.closeModal;
    useEffect(function () {
        window.addEventListener('keyup', handleKeyDown);
        return function () { return window.removeEventListener('keyup', handleKeyDown); };
    });
    var handleKeyDown = function (_a) {
        var key = _a.key;
        if (key === 'Escape')
            closeModal();
    };
    var closeIf = function (_a) {
        var target = _a.target;
        if (!(options === null || options === void 0 ? void 0 : options.closeTrigger))
            return;
        if (target.closest(".".concat(options.closeTrigger))) {
            closeModal();
        }
    };
    return (_jsxs("div", { children: [trigger && React.cloneElement(trigger, { onClick: openModal }), isModalOpen &&
                ReactDOM.createPortal(_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-background", onClick: closeModal }), _jsx("div", __assign({ className: "modal ".concat((options === null || options === void 0 ? void 0 : options.position) || 'middle'), onClick: closeIf }, { children: children }))] }), document.querySelector('#modal-root'))] }));
};
export default Modal;
