import {StateSchema} from '@/app/provider/StoreProvider';
import {getLoginIsLoading} from '@/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
