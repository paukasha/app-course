import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleRatingProps {
    className?: string;
    articleId: string
}

export const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height="120px" />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames(cls.ArticleRating, {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};
