import { PropsWithChildren } from 'react';
import './styles.css';
interface ModalOptions {
    position?: 'middle' | 'bottom';
}
interface ModalProps {
    options?: ModalOptions;
}
export declare const useModal: () => {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    Modal: ({ options, children }: PropsWithChildren<ModalProps>) => JSX.Element;
};
export {};
