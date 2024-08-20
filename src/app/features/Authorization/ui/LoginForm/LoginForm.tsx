import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReqInput } from 'shared/ui/ReqInput';
import { ReqInputSize, ReqInputTheme } from 'shared/ui/ReqInput/ui/ReqInput';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string;
    onClose:()=>void;

}

export const LoginForm = (props:LoginFormProps) => {
    const { t } = useTranslation();
    const {
        className,
        onClose,
    } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={classNames(cls.container)}>
                <div className={cls.h1}>
                    {t('Войти')}
                </div>
                <ReqInput
                    className={cls.input1}
                    size={ReqInputSize.Medium}
                    placeholder={t('Введите ваш email')}
                    theme={ReqInputTheme.Outlined}
                />
                <ReqInput
                    className={cls.input2}
                    size={ReqInputSize.Medium}
                    placeholder={t('Введите ваш пароль')}
                    theme={ReqInputTheme.Outlined}
                />
                <div className={cls.buttonGroup}>
                    <Button
                        className={cls.button1}
                        size={ButtonSize.L}
                        themeB={ButtonTheme.BACKGROUND}
                        onClick={onClose}
                    >
                        {t('Закрыть')}
                    </Button>
                    <Button
                        className={cls.button2}
                        size={ButtonSize.L}
                        themeB={ButtonTheme.BACKGROUND_INVERTED}

                    >
                        {t('Войти')}
                    </Button>

                </div>

                <Link to="/registration" className={cls.link}>{t('Зарегистрироваться')}</Link>
            </div>
        </div>

    );
};
