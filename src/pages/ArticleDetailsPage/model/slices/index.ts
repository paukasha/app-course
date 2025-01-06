import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsRecommendationsReducer } from './articleDetailRecommendationsSlice';
import { articleDetailsCommentsReducer } from './entityDetailsCommentSlice/entityDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
