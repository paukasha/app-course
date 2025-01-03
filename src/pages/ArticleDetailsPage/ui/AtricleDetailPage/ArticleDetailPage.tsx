import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';

// eslint-disable-next-line max-len
import {Page} from 'widgets/Page/Page';
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line max-len
import {ArticleDetailPageHeader} from 'pages/ArticleDetailsPage/ui/ArticleDetailPageHeader/ArticleDetailPageHeader';
import {ArticleRecommendationsList} from 'features/articleRecommendationsList';
// eslint-disable-next-line max-len
import {ArticleDetailsComments} from 'pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments';
// eslint-disable-next-line max-len
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');

    const { id } = useParams<{ id: string }>();

    // if (!id) {
    //     return (
    //         <div
    //             className={classNames(cls.ArticleDetailPage, {}, [className])}
    //         >
    //             {t('Статья не найдена')}
    //         </div>
    //     );
    // }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <ArticleDetailPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />

            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailPage);
