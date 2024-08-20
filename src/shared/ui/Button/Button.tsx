import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted',
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
        onClick,
        ...otherProps
    } = props;
    // eslint-disable-next-line no-undef
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const Ripple = document.createElement('span');
        Ripple.style.left = `${x}px`;
        Ripple.style.top = `${y}px`;
        e.currentTarget.appendChild(Ripple);
        Ripple.classList.add(classNames(cls.ripple));
        setTimeout(() => Ripple.remove(), 800);
        if (onClick) {
            onClick(e);
        }
    };

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
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
