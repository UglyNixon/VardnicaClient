import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    BACKGROUND='background',
    BACKGROUND_INVERTED='background_inverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    themeB?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    symbol?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        themeB,
        square,
        size,
        symbol,
        ...otherProps
    } = props;
    const mods :Record<string, boolean | string> = {
        [cls[themeB]]: themeB,
        [cls.square]: square,
        [cls[size]]: size,
        [cls.symbol]: symbol,
    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
