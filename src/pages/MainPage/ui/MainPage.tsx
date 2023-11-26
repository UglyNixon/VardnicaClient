import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundry';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <ErrorButton />
            <hr />
            <Button themeB={ButtonTheme.BACKGROUND}>{t('Testing')}</Button>
        </div>
    );
};

export default MainPage;
