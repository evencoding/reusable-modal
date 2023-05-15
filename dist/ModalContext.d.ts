import { ReactNode } from 'react';
interface Props {
    initState?: boolean;
    children: ReactNode;
}
interface Actions {
    openModal: () => void;
    closeModal: () => void;
}
export declare const ModalProvider: ({ initState, children }: Props) => JSX.Element;
export declare const useModalValue: () => boolean;
export declare const useModalActions: () => Actions;
export {};
