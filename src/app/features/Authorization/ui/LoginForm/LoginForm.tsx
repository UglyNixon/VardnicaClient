import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReqInput } from 'shared/ui/ReqInput';
import { ReqInputSize, ReqInputTheme } from 'shared/ui/ReqInput/ui/ReqInput';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getLoginState,
} from 'app/features/Authorization/model/selectors/getLoginState/geLoginState';
import { getUserState } from 'app/entities/User/model/selector/userSelector';
import {
    loginByUserName,
} from '../../model/services/loginByUserName/loginByUserName';
import {
    loginActions,
} from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string;
    onClose:()=>void;
}

export const LoginForm = memo((props:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        email, password, isLoading, error,
    } = useSelector(getLoginState);
    const { refresh_token } = useSelector(getUserState);
    const onChangeLogin = useCallback((value:string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const {
        className,
        onClose,
    } = props;
    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ email, password }));
    }, [email, password, dispatch, isLoading, onClose]);
    useEffect(() => {
        if (!isLoading && refresh_token) {
            onClose();
        }
    }, [refresh_token, isLoading, onClose]);
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
                    onChange={onChangeLogin}
                    value={email}
                />
                <ReqInput
                    className={cls.input2}
                    size={ReqInputSize.Medium}
                    placeholder={t('Введите ваш пароль')}
                    theme={ReqInputTheme.Outlined}
                    onChange={onChangePassword}
                    type="password"
                    value={password}

                />

                <div className={cls.error}>
                    {error && `${error}`}
                </div>

                <div className={cls.buttonGroup}>
                    <Button
                        className={cls.button1}
                        size={ButtonSize.L}
                        themeB={ButtonTheme.BACKGROUND}
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        {t('Закрыть')}
                    </Button>
                    <Button
                        onClick={onLoginClick}
                        className={cls.button2}
                        size={ButtonSize.L}
                        themeB={ButtonTheme.BACKGROUND_INVERTED}
                        disabled={isLoading}
                    >
                        {t('Войти')}
                    </Button>

                </div>

                <Link to="/registration" className={cls.link}>{t('Зарегистрироваться')}</Link>
            </div>
        </div>

    );
});
