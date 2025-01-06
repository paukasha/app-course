import { ArticleDetailsPageSchema } from './model/types';
import { ArticleDetailRecommendationsSchema } from './model/types/articleDetailRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentSchema';

export {
    ArticleDetailPageAsync as ArticleDetailPage,
} from './ui/AtricleDetailPage/ArticleDetailPage.async';

export type {
    ArticleDetailsCommentsSchema,
    ArticleDetailRecommendationsSchema,
    ArticleDetailsPageSchema,
};
