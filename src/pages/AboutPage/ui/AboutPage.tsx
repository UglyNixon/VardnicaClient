import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.styles.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
            <div className="container">
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="item3">3</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
            </div>
        </div>
    );
};

export default AboutPage;
