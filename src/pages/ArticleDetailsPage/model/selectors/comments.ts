import { StateSchema } from '@/app/provider/StoreProvider';

export const getArticleCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.comments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
