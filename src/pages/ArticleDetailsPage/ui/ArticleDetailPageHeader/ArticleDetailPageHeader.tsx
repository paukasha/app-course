import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailPageHeader.module.scss';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = ({ className }: ArticleDetailPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                {t('Вернуться к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};
