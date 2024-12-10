import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
// eslint-disable-next-line max-len
import { AddCommentForm } from 'features/AddCommentForm';
// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
import { Page } from 'widgets/Page/Page';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ArticleDetailPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
// eslint-disable-next-line max-len
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailPage.module.scss';
import { getArticleComments } from '../../model/slices/entityDetailsCommentSlice/entityDetailsCommentsSlice';
import { getArticleRecommendations } from '../../model/slices/articleDetailRecommendationsSlice';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <ArticleDetailPageHeader />
                <ArticleDetails id={id} />

                <Text size={TextSize.L} title={t('Рекомендуем')} className={cls.commentTitle} />
                <ArticleList
                    isLoading={recommendationsIsLoading}
                    articles={recommendations}
                    className={cls.recommendations}
                    target="_blank"
                />

                <Text size={TextSize.L} title={t('Комментарий')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
