import { StoreProvider } from 'app/provider/StoreProvider/ui/StoreProvider';
import { AppDispatch, createReduxStore } from 'app/provider/StoreProvider/config/store';
import type { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
