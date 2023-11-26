import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './IconButton.module.scss';

export enum IconButtonSize {
    L='size_l',
    XL='size_xl',
}
export enum IconColor {
    MAIN='mainColor',
    SECONDARY='secondaryColor',
}
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    size:IconButtonSize,
    text?:string,
    onClick?:()=>void,
    styleAttr?:string,
    color?:IconColor,
    clear?:boolean,
}

export const IconButton:FC<IconButtonProps> = (props) => {
    const {
        className,
        children,
        size,
        text,
        onClick,
        color,
        clear,
        ...otherProps
    } = props;
    const mods:Record<string, boolean | string> = {
        [cls[size]]: size,
        [cls.clear]: clear,
    };
    return (
        <div
            data-testid="iconButton"
            className={classNames(cls.IconButton, mods, [className])}
        >
            <button
                {...otherProps}
                type="button"
                onClick={onClick}
                className={classNames(cls.button, mods, [cls[color]])}
            >
                {children}
            </button>
            <div className={classNames(cls.text, { [cls.showText]: !clear }, [])}>
                {text}
            </div>
        </div>
    );
};
