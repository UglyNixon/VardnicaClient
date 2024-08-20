import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './WordsPage.module.scss';

interface WordsPageProps {
    className?:string;
}

export const WordsPage = (props:WordsPageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    return (
        <div
            className={classNames(cls.WordsPage, {}, [className])}
        >
            {t('WordsPage')}
        </div>

    );
};
