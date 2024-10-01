import { StoreProvider } from 'app/provider/StoreProvider/ui/StoreProvider';
import { createReduxStore } from 'app/provider/StoreProvider/config/store';
import type { ReduxStoreWithManager, StateSchema } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
};
