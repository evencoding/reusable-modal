import { ReactNode } from 'react';
import './styles.css';
interface ModalOptions {
    position?: 'middle' | 'bottom';
    initState?: boolean;
    closeTrigger?: string;
}
interface ModalProps {
    children: ReactNode;
    trigger?: any;
    options?: ModalOptions;
}
declare const Modal: ({ trigger, children, options }: ModalProps) => JSX.Element;
export default Modal;
