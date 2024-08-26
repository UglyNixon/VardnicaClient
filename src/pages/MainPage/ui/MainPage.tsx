import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'app/entities/Counter';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ReqInput } from 'shared/ui/ReqInput';
import { ReqInputSize, ReqInputTheme } from 'shared/ui/ReqInput/ui/ReqInput';
import { Alert } from 'shared/ui/Alert/ui/Alert';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [isOpen, setIsOpen] = React.useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
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
            <Button
                size={ButtonSize.M}
                themeB={ButtonTheme.BACKGROUND}
                onClick={onOpen}
            >
                123
            </Button>
            <Alert lazy isOpen={isOpen} onClose={onClose}>123</Alert>
            {' '}

        </div>
    );
};

export default MainPage;
