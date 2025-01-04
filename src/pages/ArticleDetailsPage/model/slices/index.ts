import { combineReducers } from '@reduxjs/toolkit';
import {ArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage';
import { articleDetailsRecommendationsReducer } from './articleDetailRecommendationsSlice';
import { articleDetailsCommentsReducer } from './entityDetailsCommentSlice/entityDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
