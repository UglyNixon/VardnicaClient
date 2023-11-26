import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './SwitcherTheme.module.scss';

interface SwitcherThemeProps {
    className?:string,
}

export const SwitcherTheme = ({ className }:SwitcherThemeProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <label
            className={classNames(cls.SwitcherTheme, {}, [className])}
            htmlFor="langInput"
        >
            <input
                className={classNames(cls.input, {}, [])}
                type="checkbox"
                checked={theme === Theme.DARK}
                onChange={toggleTheme}
                id="langInput"
            />
            <span className={cls.slider} />
        </label>
    );
};
