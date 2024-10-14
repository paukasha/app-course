import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'admin',
                },
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toBe('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFirstName(state as StateSchema)).toEqual('');
    });
});
