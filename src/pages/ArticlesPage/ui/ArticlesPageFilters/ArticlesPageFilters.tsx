import {classNames} from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from '@/entities/Article';
import { useCallback } from 'react';
import {articlesPageActions} from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {Card} from '@/shared/ui/Card/Card';
import {Input} from '@/shared/ui/Input/Input';
import {SortOrder} from '@/shared/types';
import {fetchArticlesList} from '@/pages/ArticlesPage/model/services/fetchArticlesList';
import {useDebounce} from '@/shared/lib/hooks/useDebounce/useDebounce';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFitersProps {
    className?: string;
}

export const ArticlesPageFilters = ({ className }: ArticlesPageFitersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(articlesPageActions.setSort(newSort));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((sortOrder: SortOrder) => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(articlesPageActions.setOrder(sortOrder));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(articlesPageActions.setSearch(search));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(articlesPageActions.setType(value));
        fetchData();
    }, [fetchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>

            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('ПОИСК')}
                />
            </Card>

            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
        </div>
    );
};
