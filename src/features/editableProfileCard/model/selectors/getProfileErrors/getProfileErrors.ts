import { StateSchema } from '@/app/provider/StoreProvider';

export const getProfileErrors = (state: StateSchema) => state.profile?.validateErrors;
