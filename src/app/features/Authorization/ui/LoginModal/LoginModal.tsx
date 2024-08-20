import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?:string;
    isOpen:boolean;
    onClose:()=>void;
}

export const LoginModal = (props:LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;
    const {
        className,
    } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm onClose={onClose} />
        </Modal>

    );
};
