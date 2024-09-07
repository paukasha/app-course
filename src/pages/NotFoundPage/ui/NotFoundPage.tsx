import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoubdPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoubdPageProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(
                cls.NotFoundPage,
                {},
                [className],
            )}
        >
            {t('Страница не найдена')}
        </div>
    );
};
