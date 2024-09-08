import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';
import { PageLoader } from 'pages/PageLoader/ui/PageLoader';

const MainPage = () => {
    const { t } = useTranslation('mainpage');
    return (
        <div>
            <BugButton />
            {t('Главная')}
            <PageLoader />
        </div>
    );
};

export default MainPage;
