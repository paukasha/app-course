import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

// для тестов и строибук надо инициализировать стор, для того чтобы для тестов подготовить каки ето данные
// и эти данные мы можем принимать аргументом в createReduxStore как initialState
export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
