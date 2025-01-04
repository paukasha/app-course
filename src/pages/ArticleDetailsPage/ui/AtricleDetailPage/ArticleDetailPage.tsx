import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';

// eslint-disable-next-line max-len
import { Page } from '@/widgets/Page/Page';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line max-len
import { ArticleDetailPageHeader } from '@/pages/ArticleDetailsPage/ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
// eslint-disable-next-line max-len
import { ArticleDetailsComments } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments';
// eslint-disable-next-line max-len
import cls from './ArticleDetailPage.module.scss';
import { ArticleRating } from '@/features/articleRating';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <ArticleDetailPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleRating articleId={id} />
                <ArticleDetailsComments id={id} />

            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
