import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
// eslint-disable-next-line max-len
import { AddCommentForm } from 'features/AddCommentForm';
// eslint-disable-next-line max-len
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
// eslint-disable-next-line max-len
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
// eslint-disable-next-line max-len
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/entityDetailsCommentSlice/entityDetailsCommentsSlice';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
            <div
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    {t('Вернуться к списку')}
                </Button>
                <ArticleDetails id={id} />

                <Text title={t('Комментарий')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
