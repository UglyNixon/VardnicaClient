import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './RegistrationPage.module.scss';

interface RegistrationPageProps {
    className?:string;
}

export const RegistrationPage = (props:RegistrationPageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.RegistrationPage, {}, [className])}>
            {t('Регистрация')}
        </div>

    );
};
