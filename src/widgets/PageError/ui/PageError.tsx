import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?:string,
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >

            <div className={cls.top}>
                <p className={cls.p}>{t('Ooooops')}</p>

            </div>
            <div className={cls.bottom}>
                <button
                    className={cls.button}
                    type="button"
                    onClick={reloadPage}
                >
                    {t('Обновить')}
                </button>
                <p>
                    {t('Произошла непредвиденная ошибка')}
                    {' :('}
                </p>
            </div>

        </div>
    );
};
