import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type {
    ReduxStoreWithManager, StateSchema, StateSchemaKey, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
    ThunkConfig,
};

export type {
    AppDispatch,
};
