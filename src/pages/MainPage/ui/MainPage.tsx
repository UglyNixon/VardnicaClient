import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundry';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Counter } from 'app/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <ErrorButton />
            <hr />
            <Button themeB={ButtonTheme.BACKGROUND}>{t('Testing')}</Button>
            <hr />
            <Counter />
        </div>
    );
};

export default MainPage;
