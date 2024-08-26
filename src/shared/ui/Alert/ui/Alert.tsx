import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Alert.module.scss';

interface AlertProps {
    className?:string;
    children?:React.ReactNode;
    isOpen?:boolean;
    onClose?:()=>void;
    lazy?:boolean;
}
const ANIMATION_DELAY = 300;

export const Alert = (props:AlertProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy = false,

    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const closeHandler = useCallback(():void => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    useEffect(() => {
        setIsMounted(true);
    }, [isOpen]);
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                closeHandler();
            }, 3000);
        }
    }, [isOpen, closeHandler]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },

        [isOpen],
    );
    if (lazy && !isMounted) { return null; }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay}>
                    <div
                        className={cls.content}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
