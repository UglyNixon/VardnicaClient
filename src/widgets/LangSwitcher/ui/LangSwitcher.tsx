import React, { FC } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?:string,

}

export const LangSwitcher:FC<LangSwitcherProps> = () => {
    const toggle = (e:React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };
    const { t } = useTranslation();
    return (

        <select
            className={cls.LangSwitcher}
            defaultValue={i18n.language || 'RU'}
            onChange={(e) => toggle(e)}
        >
            <option value="RU" selected={i18n.language === 'RU'}>{t('RU')}</option>
            <option value="LV" selected={i18n.language === 'LV'}>{t('LV')}</option>
            {/* <option value="EN">{t('EN')}</option> */}
        </select>
    );
};
