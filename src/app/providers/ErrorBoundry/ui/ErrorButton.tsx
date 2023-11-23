import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const ErrorButton = () => {
    // eslint-disable-next-line no-undef
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwFunc = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button
            onClick={throwFunc}

        >
            {t('throw error')}
        </Button>

    );
};
