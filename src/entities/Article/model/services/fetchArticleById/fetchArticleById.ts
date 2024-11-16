import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from '../../types/article';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetail/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
