import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('mainpage')
    return (
        <div>
            {t('Главная')}
            {t('какой то русский текст')}
        </div>
    );
};

export default MainPage;