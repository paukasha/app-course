import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('mainpage');
    return (
        <div>
            <BugButton />
            {t('Главная')}
        </div>
    );
};

export default MainPage;
