import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: articleDetailReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
): Decorator => (StoryComponent) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
