import { createAsyncThunk } from '@reduxjs/toolkit';
import {getUserAuthData} from '@/entities/User';
import {ThunkConfig} from '@/app/provider/StoreProvider/config/StateSchema';
import {Comment} from '@/entities/Comment';
// eslint-disable-next-line max-len
import {getArticleDetailData} from '@/entities/Article/model/selectors/getArticleDetail/getArticleDetail';
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '../../services/fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>>(
        'articleDetail/addCommentForArticle',
        async (text, thunkAPI) => {
            const {
                dispatch, rejectWithValue, extra, getState,
            } = thunkAPI;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
