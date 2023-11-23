import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './IconButton.module.scss';

export enum IconButtonSize {
    L='size_l',
    M='size_m',
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
    color?:IconColor
}

export const IconButton:FC<IconButtonProps> = (props) => {
    const {
        className,
        children,
        size,
        text,
        onClick,
        color,
        ...otherProps
    } = props;
    console.log(color);
    const mods:Record<string, boolean> = {
        [cls[size]]: true,
    };
    return (
        <div
            data-testid="iconButton"
            className={classNames(cls.IconButton, mods, [])}
        >
            <button
                {...otherProps}
                type="button"
                onClick={onClick}
                className={classNames(cls.button, mods, [cls[color]])}
            >
                {children}
            </button>
            <div>{text}</div>
        </div>
    );
};
