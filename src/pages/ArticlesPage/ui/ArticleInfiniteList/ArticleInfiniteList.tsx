import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlePageSelectors';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text title={t('Произошла ошибка')} />;
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
