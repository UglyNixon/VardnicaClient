import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { InputHTMLAttributes } from 'react';
import cls from './ReqInput.module.scss';

export enum ReqInputSize{
    Medium='medium',
    Large='large'
}
export enum ReqInputTheme{
    Outlined='outlined',
    Standard='standard',
    Filled='filled'
}
type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'| 'value' | 'onChange'>

interface ReqInputProps extends HtmlInputProps{
    className?:string;
    size?:ReqInputSize;
    widthError?:boolean;
    placeholder?:string;
    theme?:ReqInputTheme;
    value?:string;
    onChange?: (value:string) => void;
}

export const ReqInput = (props:ReqInputProps) => {
    const { t } = useTranslation();
    const {
        className,
        size = ReqInputSize.Medium,
        widthError,
        placeholder = '',
        onChange,
        value,
        type = 'text',
        theme = ReqInputTheme.Standard,
    } = props;
    const mods :Record<string, boolean | string> = {
        [cls.widthError]: widthError,
    };
    // eslint-disable-next-line no-undef
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.ReqInput, {}, [className, cls[size]])}>
            <div className={classNames(cls.entryArea, mods, [cls[size]])}>
                <input
                    type={type}
                    className={classNames(cls.input, mods, [cls[size], cls[theme]])}
                    required
                    value={value}
                    onChange={onChangeHandler}
                />
                <div className={classNames(cls.labelLine, mods, [cls[size]])}>
                    {t(placeholder)}
                </div>
            </div>
        </div>
    );
};
