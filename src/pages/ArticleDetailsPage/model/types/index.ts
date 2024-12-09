import { ArticleDetailRecommendationsSchema } from './articleDetailRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './articleDetailsCommentSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailRecommendationsSchema
}
