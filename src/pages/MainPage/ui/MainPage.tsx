import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'app/entities/Counter';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ReqInput } from 'shared/ui/ReqInput';
import { ReqInputSize, ReqInputTheme } from 'shared/ui/ReqInput/ui/ReqInput';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <hr />
            <ReqInput
                size={ReqInputSize.Medium}
                placeholder={t('Введите ваш email')}
                theme={ReqInputTheme.Filled}
            />
        </div>
    );
};

export default MainPage;
