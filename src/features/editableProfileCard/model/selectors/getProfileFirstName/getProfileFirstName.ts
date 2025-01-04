import {StateSchema} from '@/app/provider/StoreProvider';

export const getProfileFirstName = (state: StateSchema) => state?.profile?.data?.first || '';
