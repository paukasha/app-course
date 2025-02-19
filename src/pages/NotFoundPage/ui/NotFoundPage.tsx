import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoubdPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoubdPageProps) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(
                cls.NotFoundPage,
                {},
                [className],
            )}
        >
            {t('Страница не найдена')}
        </Page>
    );
};
