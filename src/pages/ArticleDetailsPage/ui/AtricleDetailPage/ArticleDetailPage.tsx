import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
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
                <ArticleDetails id={id} />

                <Text title={t('Комментарий')} className={cls.commentTitle} />

                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
