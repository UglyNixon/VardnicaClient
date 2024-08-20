import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { InputHTMLAttributes, useState } from 'react';
import { IconButton } from 'shared/ui/IconButton';
import { IconButtonSize, IconColor } from 'shared/ui/IconButton/ui/IconButton';
import Eye from 'shared/assets/icons/eye.svg';
import EyeOff from 'shared/assets/icons/eyeOff.svg';
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
    const [show, setShow] = useState(false);
    const showPassword = () => {
        setShow((show) => !show);
    };

    return (
        <div className={classNames(cls.ReqInput, {}, [className, cls[size]])}>
            <div className={classNames(cls.entryArea, mods, [cls[size]])}>
                <input
                    type={show ? 'text' : type}
                    className={classNames(cls.input, mods, [cls[size], cls[theme]])}
                    required
                    value={value}
                    onChange={onChangeHandler}
                />
                <div className={classNames(cls.labelLine, mods, [cls[size]])}>
                    {t(placeholder)}
                </div>
                {type === 'password'
                    && (
                        <div className={classNames(cls.passIcon)}>
                            <IconButton
                                onClick={showPassword}
                                size={IconButtonSize.L}
                                color={IconColor.SECONDARY}
                                clear
                            >
                                {show ? <Eye /> : <EyeOff />}

                            </IconButton>
                        </div>
                    )}
            </div>
        </div>
    );
};
