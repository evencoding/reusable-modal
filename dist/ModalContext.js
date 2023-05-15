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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
var ModalValueContext = createContext(undefined);
var ModalActionsContext = createContext(undefined);
export var ModalProvider = function (_a) {
    var initState = _a.initState, children = _a.children;
    var _b = useState(initState || false), modalState = _b[0], setModalState = _b[1];
    var openModal = function () {
        setModalState(true);
    };
    var closeModal = function () {
        setModalState(false);
    };
    var actions = useMemo(function () { return ({
        openModal: openModal,
        closeModal: closeModal,
    }); }, []);
    return (_jsx(ModalActionsContext.Provider, __assign({ value: actions }, { children: _jsx(ModalValueContext.Provider, __assign({ value: modalState }, { children: children })) })));
};
export var useModalValue = function () {
    var state = useContext(ModalValueContext);
    if (state === undefined)
        throw Error('cannot find Provider');
    return state;
};
export var useModalActions = function () {
    var actions = useContext(ModalActionsContext);
    if (!(actions === null || actions === void 0 ? void 0 : actions.openModal) || !(actions === null || actions === void 0 ? void 0 : actions.closeModal))
        throw Error('cannot find Provider');
    return actions;
};
