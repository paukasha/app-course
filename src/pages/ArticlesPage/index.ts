import { getArticlesPageHasMore, getArticlesPageNum } from './model/selectors/articlePageSelectors';
import { fetchNextArticlesPage } from './model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from './model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from './ui/ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from './ui/ArticleInfiniteList/ArticleInfiniteList';

export type { ArticlesPageSchema } from './model/types/articlePageSchema';

export { ArticlesPageAsync as ArticlePage } from './ui/ArticlesPage/ArticlesPage.async';

// export {
//     getArticlesPageHasMore, getArticlesPageNum, fetchNextArticlesPage, initArticlesPage, ArticlesPageFilters, ArticleInfiniteList,
// };

export {
    getArticlesPageHasMore,
    getArticlesPageNum,
    fetchNextArticlesPage,
    initArticlesPage,
    ArticlesPageFilters,
    ArticleInfiniteList,
};
