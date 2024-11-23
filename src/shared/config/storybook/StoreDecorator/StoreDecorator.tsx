import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: articleDetailReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
): Decorator => (Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
